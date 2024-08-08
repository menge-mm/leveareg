import { FormProvider, useForm } from 'react-hook-form';
import { patient } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { PatientType } from '@/constants/patient.schema';
import { ReusableForm } from './ReusableForm';
import { useRegFormContext } from './reducer';
import FormButtons from './FormButtons';
import { motion } from 'framer-motion';

const Patient = ({ fieldsSchema, index, title, description }: any) => {
  const { state, dispatch } = useRegFormContext();
  const form = useForm<PatientType>({
    resolver: zodResolver(patient),
    defaultValues: {
      patient: state.formData.patient,
    },
    mode: 'onChange',
  });

  const collectForm = async () => {
    const valid = await form.trigger('patient');

    if (!valid) return;

    dispatch({
      type: 'ADD_RESOURCE',
      resource: 'patient',
      payload: form.getValues('patient'),
    });
    dispatch({ type: 'NEXT' });
  };

  return (
    <FormProvider {...form}>
      <motion.form
        initial={{ x: state.step >= 0 ? '50%' : '-50%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.025, ease: 'easeInOut' }}
      >
        <div className="min-h-[60vh]">
          <div>
            <div className="flex flex-col items-end mr-3">
              <h2 className="text-lg md:text-2xl font-medium">{title}</h2>
              <p className="text-gray-500">{description}</p>
            </div>
            <div className="space-y-2 mt-3 px-1 md:py-2 md:px-3 md:border md:rounded">
              <ReusableForm collectionName="patient" fieldSchema={fieldsSchema} index={index} />
            </div>
          </div>
        </div>

        {/* <Sliders /> */}
        <FormButtons collectForm={collectForm} />
      </motion.form>
    </FormProvider>
  );
};

export default Patient;
