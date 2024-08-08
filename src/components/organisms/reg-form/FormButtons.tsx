import { Button } from '@/components/atoms/button';
import { ArrowBigLeft, ArrowBigRight, RefreshCcw, SkipForward } from 'lucide-react';
import React from 'react';
import { useRegFormContext } from './reducer';
import { steps } from './steps';
import { resourceNames } from './steps';
import { useFormContext } from 'react-hook-form';

const ConnectForm = ({ children }: { children: React.FC }) => {
  const methods = useFormContext();
  return children({ ...methods });
};

const FormButtons = ({ collectForm, loading }: any) => {
  const { state, dispatch } = useRegFormContext();
  const form = useFormContext();
  const isStart = () => {
    return state.step === 0;
  };

  const isEnd = () => {
    return state.step === steps.length - 1;
  };

  const skip = async () => {
    const isValid = await form.trigger(resourceNames(state.step));
    if (!isValid && form.formState.isDirty) return;
    dispatch({
      type: 'CHANGE_SKIP_STATE',
      resource: resourceNames(state.step),
      payload: true,
    });

    if (!isEnd()) {
      dispatch({ type: 'SKIP' });
    }
  };

  const next = async () => {
    if (!isEnd()) {
      await collectForm();
    }
  };

  const prev = () => {
    if (!isStart()) {
      dispatch({ type: 'PREV' });
    }
  };

  return (
    <ConnectForm>
      {({ ...methods }) => (
        <div className="flex justify-between items-center my-5 md:mt-7">
          <Button
            variant={'secondary'}
            className={`text-foreground  border hover:bg-foreground hover:text-background transition duration-150 border-foreground mr-auto px-3 ${
              isStart() ? 'invisible' : ''
            }`}
            type="button"
            onClick={prev}
            disabled={isStart()}
          >
            <ArrowBigLeft className="mr-2 w-5 h-5" />
            رجوع
          </Button>
          <div className="flex items-center justify-end gap-2">
            <Button
              type="button"
              variant={'outline'}
              onClick={skip}
              disabled={isEnd() || form.formState.isDirty}
              className={
                isEnd() ||
                resourceNames(state.step) === 'patient' ||
                resourceNames(state.step) === 'socialHistory' ||
                form.formState.isDirty
                  ? 'hidden px-3'
                  : 'px-3'
              }
            >
              يتخطى <SkipForward className="ml-3 w-4 h-4" />
            </Button>

            <Button type="button" disabled={isEnd()} className={isEnd() ? 'hidden px-3' : 'px-3'} onClick={next}>
              التالي <ArrowBigRight className="ml-3 w-5 h-5" />
            </Button>
          </div>

          <Button type="submit" className={isEnd() ? 'bg-primary' : 'hidden'}>
            {loading ? 'إرسال البيانات' : 'إرسال البيانات'}
            {loading && (
              <span className="ml-2 animate-spin">
                <RefreshCcw className="h-4 w-4 text-white" />
              </span>
            )}
          </Button>
        </div>
      )}
    </ConnectForm>
  );
};

export default FormButtons;

// async function submitForm(data: BundleResourceType) {
//   setLoading(true);
//   if (!form.formState.errors) {
//     toast({
//       title: "Error",
//       description: (
//         <div>
//           There is something wrong with your form
//           <pre className="bg-black p-2 border">
//             {JSON.stringify(form.formState.errors, null, 2)}
//           </pre>
//         </div>
//       ),
//       variant: "destructive",
//       action: (
//         <ToastAction altText="Close" onClick={() => {}}>
//           Close
//         </ToastAction>
//       ),
//     });
//     setLoading(false);
//     return;
//   }

//   const { consent, ...fhirData } = data;
//   const patientData = { patient: fhirData.patient, consent };

//   // store fhir data to fhir server
//   try {
//     const responses = await Promise.all([
//       await axios.post("/api/register-fhir", fhirData),
//       await axios.post("/api/add-patient", patientData),
//     ]);

//     // reset form
//     form.reset();
//     setStep(0);
//     responses.forEach((response) => {
//       // console.log(response.data);
//       toast({
//         title: "Success",
//         description: response.data.message,
//         variant: "success",
//         action: (
//           <ToastAction altText="Close" onClick={() => {}}>
//             Close
//           </ToastAction>
//         ),
//       });
//     });
//   } catch (error) {
//     toast({
//       title: "خطأ في إرسال البيانات",
//       description: "حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً",
//       variant: "destructive",
//       action: (
//         <ToastAction altText="Close" onClick={() => {}} className="bg-red-700">
//           Close
//         </ToastAction>
//       ),
//     });
//   }

//   setLoading(false);
// }
