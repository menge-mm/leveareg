import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

type SelectItem = {
  id: string;
  value: string;
  display: string;
  arDisplay?: string;
};

interface FormSelectProps {
  required?: boolean;
  label?: string;
  name: string;
  defaultValue?: string;
  options: SelectItem[];
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  multiple?: boolean;
  onChange?: (name: string, value: any) => void;
}

const FormMultiSelect = ({
  required,
  label,
  options,
  multiple = false,
  name,
  onChange,
  defaultValue,
  placeholder,
  description,
  errorMessage,
  ...rest
}: FormSelectProps) => {
  const { control, getValues } = useFormContext();

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor={name} className="form__label flex items-center gap-1 ml-auto">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange } }) => (
            <Select
              isRtl={true}
              placeholder={'اختر خيارًا واحدًا أو أكثر'}
              isMulti={multiple}
              onChange={(items: any) => {
                const newItems = items.map((item: any) => item.value);
                onChange(newItems);
              }}
              options={options.map((item) => ({ value: item.value, label: item.arDisplay }))}
              className="cursor-pointer border-gray-400 placeholder:text-sm text-sm"
            />
          )}
        />
      </div>
    </div>
  );
};

export default FormMultiSelect;
