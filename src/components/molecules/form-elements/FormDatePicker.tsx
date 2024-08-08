import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/atoms/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/atoms/popover';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/atoms/form';
import { FormField } from '@/components/atoms/form';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, formatISO } from 'date-fns';
import { Calendar } from '@/components/atoms/calendar';

type FormDatePickerProps = {
  required?: boolean;
  label: string;
  name: string;
  value?: string;
  description?: string;
};

const FormDatePicker = ({ required = true, label = '', name = '', description = '' }: FormDatePickerProps) => {
  const [open, setOpen] = useState(false);
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const safeDateValue = field.value ? new Date(field.value) : new Date();
        const displayDate = field.value ? format(safeDateValue, 'PPP') : 'اختر تاريخاً';

        return (
          <FormItem className="flex flex-col gap-2" dir="rtl">
            {label && (
              <FormLabel className="font-normal text-md flex items-center gap-1">
                {label}
                {required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
            <Popover open={open}>
              <PopoverTrigger asChild>
                <FormControl className="ml-0 pl-0">
                  <Button
                    onClick={() => setOpen(!open)}
                    variant={'outline'}
                    className={cn('text-left font-normal pl-0', !field.value && 'text-muted-foreground')}
                  >
                    {displayDate}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={safeDateValue}
                  onSelect={(date) => {
                    field.onChange(date?.toISOString());
                    setOpen(false);
                  }}
                  disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormDatePicker;
