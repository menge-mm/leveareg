import { ReusableForm } from './ReusableForm';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { consent } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { ConsentType, defaultConsent } from '@/constants/consent.schema';
import { useRegFormContext } from './reducer';
import FormButtons from './FormButtons';
import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { ToastAction } from '@radix-ui/react-toast';
import { useToast } from '@/components/atoms/use-toast';
import { v4 as uuid4 } from 'uuid';
import { motion } from 'framer-motion';

const Consent = ({ fieldsSchema, index, title, description }: any) => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useRegFormContext();
  const { toast } = useToast();
  const form = useForm<ConsentType>({
    resolver: zodResolver(consent),
    defaultValues: {
      consent: state.formData.consent,
    },
    mode: 'onChange',
  });

  const collectForm = async () => {
    // const isValid = await form.trigger('consent');
    // if (!isValid) return;
    dispatch({
      type: 'ADD_RESOURCE',
      resource: 'consent',
      payload: form.getValues('consent'),
    });
  };

  const generateId = async () => {
    try {
      const id = await uuid4();
      if (id !== null && id !== undefined) {
        return id;
      }
      throw new Error('Unable to generate a unique id');
    } catch (error) {
      return null;
    }
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);

    if (!form.formState.errors) {
      toast({
        title: 'Error',
        description: (
          <div>
            There is something wrong with your form
            <pre className="bg-black p-2 border">{JSON.stringify(form.formState.errors, null, 2)}</pre>
          </div>
        ),
        variant: 'destructive',
        action: (
          <ToastAction altText="Close" onClick={() => {}}>
            Close
          </ToastAction>
        ),
      });
      setLoading(false);
      return;
    }

    try {
      await collectForm();
      const patientId = await generateId();
      if (!patientId) {
        throw new Error('Unable to store patient record. Please try again later.');
      }

      const { consent, ...fhirData } = state.formData;
      const patientData = {
        patient: { fhirResourceId: patientId, ...fhirData.patient },
        consent,
      };

      fhirData.patient.id = patientId;

      const formData = {
        skipped: state.skipped,
        data: fhirData,
      };
      const responses = await Promise.all([
        await axios.post('/api/register-fhir', formData),
        await axios.post('/api/add-patient', patientData),
      ]);
      form.reset();
      dispatch({
        type: 'RESET',
      });

      responses.forEach((response) => {
        toast({
          title: 'Success',
          description: response.data.message,
          variant: 'success',
          action: (
            <ToastAction altText="Close" onClick={() => {}}>
              Close
            </ToastAction>
          ),
        });
      });
    } catch (error) {
      toast({
        title: 'خطأ في إرسال البيانات',
        description: 'حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً',
        variant: 'destructive',
        action: (
          <ToastAction altText="Close" onClick={() => {}} className="bg-red-700">
            Close
          </ToastAction>
        ),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...form}>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ x: state.step >= 0 ? '50%' : '-50%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.025, ease: 'easeInOut' }}
      >
        <div className="min-h-[60vh]">
          <div className="flex flex-col items-end mr-3">
            <h2 className="text-lg md:text-2xl font-medium">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>

          <div className="space-y-2 mt-3 px-1 md:py-2 md:px-3 md:border md:rounded">
            <ReusableForm collectionName="consent" fieldSchema={fieldsSchema} index={index} />
          </div>
        </div>
        <FormButtons collectForm={collectForm} loading={loading} />
      </motion.form>
    </FormProvider>
  );
};

export default Consent;
