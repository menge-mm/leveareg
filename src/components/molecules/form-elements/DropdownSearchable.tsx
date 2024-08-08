import { useState } from 'react';
import { FormLabel } from '@/components/atoms/form';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/atoms/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/atoms/popover';
import { Button } from '@/components/atoms/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Tags from '../tags/Tags';
import { ListItem } from '@/components/organisms/reg-form/types';

interface SearchableDropDownProps {
  items: ListItem[];
  label?: string;
  defaultValue?: string;
  resourceName?: string;
  resourceType?: string;
  searchKey?: string;
  multiple?: boolean;
  onChange: (value: string) => void;
  setDialogShow: (value: boolean) => void;
  setIndex: (value: number) => void;
}

const DropdownSearchable = ({
  items = [],
  label = '',
  defaultValue = '',
  multiple = false,
  resourceName,
  searchKey,
  resourceType,
  onChange,
  setDialogShow,
  setIndex,
}: SearchableDropDownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col gap-1 max-w-screen md:max-w-screen">
      {label && <FormLabel className="font-normal text-md">{label}</FormLabel>}
      {
        <Tags
          resourceType={resourceType || ''}
          setDialogShow={setDialogShow}
          setIndex={setIndex}
          searchKey={searchKey || ''}
        />
      }
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between overflow-hidden font-normal px-3"
          >
            {value
              ? items.find((item) => item.value === value)?.arDisplay
              : defaultValue
              ? items.find((item) => item.value === defaultValue)?.arDisplay
              : `...${resourceName} اختر`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="min-w-[340px] sm:min-w-[500px] md:min-w-[560px]">
          <Command>
            <CommandInput placeholder={`...${resourceName} بحث`} />
            <CommandEmpty>No {resourceName} found.</CommandEmpty>

            <CommandList>
              {items.map((item, index) => (
                <CommandItem
                  className="w-full flex gap-1 items-center overflow-clip mr-5"
                  key={`${item.id}-${index}`}
                  value={item.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    setDialogShow(true);
                  }}
                >
                  <Check
                    className={cn(
                      'flex-shrink-0 w-4 h-4',
                      value === item.value ? 'opacity-100 block' : 'opacity-0 hidden'
                    )}
                  />
                  <span>{item.arDisplay}</span>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DropdownSearchable;
