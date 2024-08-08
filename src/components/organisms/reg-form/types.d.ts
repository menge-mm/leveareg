export type ListItem = {
  id: string;
  value: string;
  display: string;
  arDisplay: string;
};

export type FieldValueType = {
  type: string;
  label: string;
  arLabel: string;
  required?: boolean;
  options?: { id: string | number; value: string; display: string; arDisplay: string }[];
  arDescription?: string;
  description?: string;
};

export type SelectProps = {
  name: string;
  label: string;
  options: ListItem[];
  required: boolean;
  defaultValue?: string;
  description?: string;
};
