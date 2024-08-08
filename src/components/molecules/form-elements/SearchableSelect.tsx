import { Button } from '@/components/atoms/button';
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from '@/components/atoms/command';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/atoms/form';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/atoms/popover';
import { SelectProps } from '@/components/organisms/reg-form/types';
import { cn } from '@/lib/utils';
import { CommandList } from 'cmdk';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const SearchableSelect = ({ name, label, options, required, defaultValue, description }: SelectProps) => {
  const { control, setValue } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full flex flex-col" dir="rtl">
          {label && (
            <FormLabel className="font-normal text-md flex items-center gap-1" dir="rtl">
              {label}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <Popover open={open}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  onClick={() => setOpen((open) => !open)}
                  variant="outline"
                  role="combobox"
                  className={cn('justify-between gap-2', !field.value && 'text-muted-foreground')}
                >
                  {field.value ? options.find((option) => option.value === field.value)?.arDisplay : `${label} اختر`}
                  <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50 bg-gray-300" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-full popover-content z-50" dir="rtl">
              <Command>
                <CommandInput placeholder={`اختر ${label}`} dir="rtl" />
                <CommandEmpty dir="rtl">لا {label} وجد.</CommandEmpty>
                <CommandList>
                  {options.map((option) => (
                    <CommandItem
                      value={option.arDisplay}
                      key={option.id}
                      onSelect={() => {
                        setOpen(false);
                        setValue(name, option.value);
                      }}
                    >
                      <Check
                        className={cn('ml-3 h-4 w-4', option.value === field.value ? 'opacity-100' : 'opacity-0')}
                      />
                      {option.arDisplay}
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}.</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SearchableSelect;
