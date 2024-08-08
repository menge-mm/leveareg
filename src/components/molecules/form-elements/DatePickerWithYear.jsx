import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ArrowLeftIcon, ArrowRightIcon, CalendarFoldIcon } from 'lucide-react';
import { getMonth, getYear } from 'date-fns';
import { Controller, useFormContext } from 'react-hook-form';
import { Button } from '@/components/atoms/button';

// Custom Input Component using forwardRef
const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <Button
    type="button"
    onClick={onClick}
    ref={ref}
    className="bg-background font-normal hover:bg-gray-100 relative w-full py-2 justify-end text-start px-3 border rounded-md text-normal border-gray-400"
  >
    <span>{value ? value : <span className="text-gray-500">اختر تاريخاً</span>}</span>
    <span className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 h-full flex items-center px-2 border-l border-l-gray-400 text-gray-600 focus:border-gray-500">
      <CalendarFoldIcon color="#777" className="" />
    </span>
  </Button>
));

CustomInput.displayName = 'CustomInput';

function range(start, end, step = 1) {
  const array = [];
  for (let i = start; i < end; i += step) {
    array.push(i);
  }
  return array;
}

function DatePickerWithYear({ required = false, label = '', name = '', description = '', defaultValue = new Date() }) {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1899, getYear(new Date()) + 1, 1);
  const { control, register } = useFormContext();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="flex flex-col gap-2 overflow-hidden z-10">
      <label className="flex gap-1 items-center w-full justify-end self-end">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <Controller
        defaultValue={startDate.toISOString()}
        name={name}
        control={control}
        {...register(name, {
          required: true,
        })}
        render={({ field: { value, onChange, ref } }) => (
          <DatePicker
            popperPlacement="bottom-end"
            portalId="root-portal"
            selected={value}
            onChange={(value) => {
              setStartDate(value);
              onChange(value.toISOString());
            }}
            className="z-50"
            customInput={<CustomInput ref={ref} />}
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decreaseMonth();
                  }}
                  disabled={prevMonthButtonDisabled}
                  className="border px-1"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                  className="w-full py-1 border border-l-0"
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  className="w-full py-1 border"
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increaseMonth();
                  }}
                  disabled={nextMonthButtonDisabled}
                  className="border px-1"
                >
                  <ArrowRightIcon className="w-4 h-5" />
                </button>
              </div>
            )}
            errorMessages={['This field is required']}
          />
        )}
      />

      {description && <p>{description}</p>}
    </div>
  );
}

export default DatePickerWithYear;
