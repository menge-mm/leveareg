import {
  // FormSelect,
  // FormDatePicker,
  FormInput,
  FormTextArea,
  FormCheckbox,
  DatePickerWithYear,
  FormMultiSelect,
  SearchableSelect,
  Slider,
} from '@/components/molecules/form-elements';
import type { FieldSchemaType } from '@/constants/fieldSchema';
import { FieldValueType, ListItem } from './types';

export const ReusableForm = ({
  collectionName,
  index,
  fieldSchema,
}: {
  collectionName: string;
  index?: number;
  fieldSchema: FieldSchemaType;
}) => {
  if (!fieldSchema) return null;
  return (
    <div className="space-y-2 md:px-1">
      {Object.entries(fieldSchema).map(([key, value]: [string, FieldValueType]) => {
        if (key === 'resourceType' || key === 'id') return null;
        switch (value.type) {
          case 'select':
            return (
              // <FormSelect
              //   key={key}
              //   label={value.arLabel}
              //   required={value.required || false}
              //   name={
              //     index === undefined || index === null
              //       ? `${collectionName}.${key}`
              //       : `${collectionName}.${index}.${key}`
              //   }
              //   options={value.options as ListItem[]}
              // />
              <SearchableSelect
                key={key}
                label={value.arLabel}
                required={value.required || false}
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
                options={value.options as ListItem[]}
              />
            );
          case 'date':
            return (
              <DatePickerWithYear
                key={key}
                label={value.arLabel}
                required={value.required || false}
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
              />
            );
          case 'input':
            return (
              <FormInput
                key={key}
                label={value.arLabel}
                placeholder={value.arLabel}
                required={value.required || false}
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
              />
            );
          case 'number':
            return (
              <FormInput
                key={key}
                label={value.arLabel}
                placeholder={value.arLabel}
                required={value.required || false}
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
                type="number"
              />
            );
          case 'textarea':
            return (
              <FormTextArea
                key={key}
                label={value.arLabel}
                required={value.required || false}
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
              />
            );
          case 'checkbox':
            return (
              <FormCheckbox
                key={key}
                label={value.arLabel}
                required={value.required || false}
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
              />
            );

          case 'hidden-checkbox':
            return (
              <FormCheckbox
                key={key}
                label={value.arLabel}
                required={value.required || false}
                hidden
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
              />
            );
          case 'multiselect':
            return (
              <FormMultiSelect
                key={key}
                label={value.arLabel}
                required={value.required}
                multiple
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
                options={value.options as ListItem[]}
              />
            );

          case 'slider':
            return (
              <Slider
                key={key}
                name={
                  index === undefined || index === null
                    ? `${collectionName}.${key}`
                    : `${collectionName}.${index}.${key}`
                }
                label={value.arLabel}
                description={value.arDescription}
                required={value.required}
                defaultValue={0}
                step={5}
                max={20}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
