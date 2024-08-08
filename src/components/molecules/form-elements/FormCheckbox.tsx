import { Checkbox } from '@/components/atoms/checkbox';
import { useFormContext } from 'react-hook-form';

type FormCheckboxProps = {
  label: string;
  name: string;
  onChange?: (e: any) => void;
  value?: string;
  checked?: boolean;
  hidden?: boolean;
  required?: boolean;
};

const FormCheckbox = ({ label, name, hidden, required, ...rest }: FormCheckboxProps) => {
  const { register, getValues } = useFormContext();
  // console.log("patient", getValues("patient"));

  return (
    <div
      className={`flex gap-3 items-start border px-3 py-2 rounded-md shadow-xs justify-end ${
        hidden ? 'invisible' : ''
      }`}
    >
      {/* <Checkbox {...register(name)} {...rest} className="h-6 w-6 accent-blue-600" /> */}
      <label className="py-0 -translate-y-1 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        dir="rtl"
        type="checkbox"
        {...register(name)}
        {...rest}
        className="cursor-pointer h-5 w-5 accent-[#2667FF] flex-shrink-0 border-indigo-700 rounded checked:bg-accent-blue-600 checked:border-transparent focus:ring-accent-blue-500"
      />
    </div>
  );
};

export default FormCheckbox;
