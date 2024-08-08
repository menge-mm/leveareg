import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/select';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/atoms/form';
import { ListItem } from '@/components/organisms/reg-form/types';

interface FormSelectProps {
  label?: string;
  name: string;
  options: ListItem[];
  description?: string;
  required?: boolean;
}

const FormSelect = ({ label = '', name, options, description, required }: FormSelectProps) => {
  const { control, getValues } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem dir="rtl">
          {label && (
            <FormLabel className="font-normal text-md flex items-center gap-1">
              {label}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <Select onValueChange={field.onChange} value={field.value} dir="rtl">
            <FormControl className="border-gray-400">
              <SelectTrigger>
                <SelectValue placeholder={`${label} اختر`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup className="max-w-[90vw] md:w-auto">
                {options.map((item: ListItem) => {
                  return (
                    <SelectItem key={item.id} value={item.value}>
                      {item.arDisplay}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
