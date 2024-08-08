import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

type SliderProps = {
  name: string;
  label: string;
  description?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max: number;
  step?: number;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  defaultValue: number;
};

const Slider = ({
  name,
  label,
  description,
  required,
  onChange,
  min = 0,
  max = 20,
  step = 4,
  className,
  disabled = false,
  hidden = false,
  defaultValue,
}: SliderProps) => {
  const { register, getValues } = useFormContext();

  console.log(getValues('patient'));

  return (
    <div className={`p-2 w-full  bg-primary/5 rounded ${hidden ? 'hidden' : ''}`}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="border border-primary p-1 px-2 font-mono font-semibold rounded">${getValues(name)}</span>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" dir="rtl">
            {label}
          </label>
        </div>
      )}
      <input
        dir="rtl"
        list="markers"
        type="range"
        defaultValue={defaultValue}
        step={step}
        max={max}
        min={min}
        className={cn('w-full bg-gray-400 accent-primary rounded-lg  cursor-pointer dark:bg-gray-700', className)}
        disabled={disabled}
        {...register(name, { required, setValueAs: (value) => Number(value) })}
      />
      <datalist id="markers" dir="rtl">
        {Array.from({ length: Math.floor((max - min) / step) + 1 }).map((_, i) => (
          <option value={min + i * step} key={i} label={`$${min + i * step}`}>
            |
          </option>
        ))}
      </datalist>
      {description && (
        <p className="text-muted-foreground mt-2 text-sm" dir="rtl">
          {description}
        </p>
      )}
    </div>
  );
};

export default Slider;
