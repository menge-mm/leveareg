import { ReusableForm } from './ReusableForm';
import { FormProvider, useForm } from 'react-hook-form';
import { socialHistory } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { SocialHistoryType } from '@/constants/socialHistory.schema';
import { useRegFormContext } from './reducer';
import FormButtons from './FormButtons';
import { motion } from 'framer-motion';

const SocialHistory = ({ fieldsSchema, index, title, description }: any) => {
  const { dispatch, state } = useRegFormContext();

  const form = useForm<SocialHistoryType>({
    resolver: zodResolver(socialHistory),
    defaultValues: {
      socialHistory: state.formData.socialHistory,
    },
    mode: 'onChange',
  });

  const collectForm = async () => {
    // const isValid = await form.trigger('socialHistory');

    // if (!isValid) return;
    dispatch({
      type: 'ADD_RESOURCE',
      resource: 'socialHistory',
      payload: form.getValues('socialHistory'),
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
              <ReusableForm collectionName="socialHistory" fieldSchema={fieldsSchema} index={index} />
            </div>
          </div>
        </div>
        <FormButtons collectForm={collectForm} />
      </motion.form>
    </FormProvider>
  );
};

export default SocialHistory;
