import { useFormContext } from 'react-hook-form';
import { Textarea } from '@/components/atoms/textarea';

type FormTextareaProps = {
  name: string;
  value?: string;
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  required?: boolean;
};

const FormTextArea = ({
  label = '',
  placeholder = '',
  name = '',
  description = '',
  errorMessage,
  required,
  ...rest
}: FormTextareaProps) => {
  const { register } = useFormContext();
  return (
    <div className="space-y-[3px]">
      <label htmlFor={name} className="font-normal text-md flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <Textarea dir="rtl" placeholder={placeholder} {...register(name)} {...rest} className="border-gray-400" />
      {description && <p>{description}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FormTextArea;
