import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/atoms/input';
import { FormControl, FormDescription, FormField, FormItem, FormMessage, FormLabel } from '@/components/atoms/form';

type FormInputProps = {
  disabled?: boolean;
  required?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  description?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: any) => void;
};

export const OldFormInput = ({
  label,
  disabled,
  required = false,
  name,
  placeholder,
  errorMessage,
  description,
  type = 'text',
  value,
  ...rest
}: FormInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="space-y-[2px]">
      <label htmlFor={name} className="text-md flex gap-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Input type={type} placeholder={placeholder} disabled={disabled} {...register(name)} {...rest} />
      {description && <p>{description}</p>}
      {<p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

const FormInput = ({
  label,
  disabled,
  required,
  name,
  placeholder,
  description,
  type = 'text',
  value,
  ...rest
}: FormInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="my-0 flex items-center gap-1 mb-0 py-0" dir="rtl">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl className="mt-0">
            <Input
              dir="rtl"
              placeholder={placeholder}
              {...field}
              type={type}
              disabled={disabled}
              className="border-gray-400 my-0"
            />
          </FormControl>
          {description && <FormDescription dir="rtl">{description}</FormDescription>}
          <FormMessage dir="rtl" />
        </FormItem>
      )}
    />
  );
};
export default FormInput;
