import React from "react";
import Tag from "./Tag";
import { useFormContext, useFormState } from "react-hook-form";

const Tags = ({
  searchKey,
  resourceType,
  setDialogShow,
  setIndex,
}: {
  searchKey: string;
  resourceType: string;
  setDialogShow: (dialogState: boolean) => void;
  setIndex: (index: any) => void;
}) => {
  const { getValues, control, getFieldState } = useFormContext();
  const { dirtyFields } = useFormState({
    control,
  });

  const fields = getValues(resourceType);

  if (fields && fields.length === 0) return null;

  if (!getFieldState(resourceType)?.isDirty) return null;

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {fields.map((field: any, index: number) => (
        <Tag
          key={index}
          searchKey={searchKey}
          field={field}
          setDialogShow={setDialogShow}
          setIndex={setIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default Tags;
