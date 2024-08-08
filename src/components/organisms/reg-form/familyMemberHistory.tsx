import { Form, FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { MinusCircleIcon, PlusCircleIcon, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { familyMemberHistories } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { FamilyMemberHistoryType, defaultFamilyMemberHistory } from '@/constants/familyMemberHistory.schema';
import { ReusableForm } from './ReusableForm';
import { useRegFormContext } from './reducer';
import FormButtons from './FormButtons';
import { motion } from 'framer-motion';

const FamilyMemberHistory = ({ fieldsSchema, index, title, description }: any) => {
  const { dispatch, state } = useRegFormContext();
  const form = useForm<FamilyMemberHistoryType>({
    resolver: zodResolver(familyMemberHistories),
    defaultValues: {
      familyMemberHistories: state.formData.familyMemberHistories,
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'familyMemberHistories',
  });

  const handleClear = () => {
    form.resetField('familyMemberHistories');
  };

  const collectForm = async () => {
    // const isValid = await form.trigger('familyMemberHistories');
    // if (!isValid) return;
    dispatch({
      type: 'ADD_RESOURCE',
      resource: 'familyMemberHistories',
      payload: form.getValues('familyMemberHistories'),
    });
    dispatch({ type: 'NEXT' });
  };

  return (
    <FormProvider {...form}>
      <motion.div
        initial={{ x: state.step >= 0 ? '50%' : '-50%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.025, ease: 'easeInOut' }}
      >
        <div className="min-h-[60vh]">
          <div className="flex flex-col items-end mr-3">
            <h2 className="text-lg md:text-2xl font-medium">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>

          {fields.map((field, index) => (
            <div
              className="space-y-2 mt-3 w-full flex flex-col md:border py-2 px-1 md:px-3"
              key={`${field.id}-${index}`}
            >
              <span className="self-end ml-auto text-sm py-1 bg-blue-50 border-b-2 border-r-2 border-blue-400 px-3 rounded font-medium">
                [ {index + 1} ] - تاريخ العضو
              </span>

              <ReusableForm collectionName="familyMemberHistories" fieldSchema={fieldsSchema} index={index} />
              <Button
                size={'sm'}
                type="button"
                onClick={() => {
                  if (index === 0) {
                    handleClear();
                  } else {
                    remove(index);
                  }
                }}
                className="w-[150px] ml-auto border-2 border-danger rounded-full border-dashed text-danger bg-red-50 hover:bg-red-200 hover:text-background mt-2 hover:border-solid mt-3"
              >
                {index > 0 ? 'إزالة السجل' : 'مسح النموذج'}
                {index > 0 ? <MinusCircleIcon className="ml-2 w-4 h-4" /> : <RefreshCcw className="ml-2 w-4 h-4" />}
              </Button>
            </div>
          ))}
          <div className="flex items-center justify-between mt-4 mr-4">
            <Button
              type="button"
              size="sm"
              onClick={() => append(defaultFamilyMemberHistory.familyMemberHistories[0])}
              className="w-[150px] ml-auto border-2 border-primary border-dashed shadow-sm bg-blue-200 hover:bg-blue-300  text-primary rounded-full flex items-center hover:border-solid"
            >
              أضف سجل
              <PlusCircleIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        <FormButtons collectForm={collectForm} />
      </motion.div>
    </FormProvider>
  );
};

export default FamilyMemberHistory;
