// @ts-ignore
import React, { useRef } from "react";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/atoms/form";
import { useFormContext } from "react-hook-form";

const QuillEditor = dynamic(() => import("react-quill"), {
  ssr: false,

  loading: () => <p>Loading ...</p>,
});

type RichTextEditorProps = {
  label?: string;
  name: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
};

const RichTextEditor = (props: RichTextEditorProps) => {
  const { label, name, description, placeholder, required } = props;

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const { control, getValues } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="font-normal text-md flex items-center gap-1">
              {label}
              {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <QuillEditor
            theme="snow"
            value={field.value || ""}
            onChange={(value) => {
              field.onChange(value);
            }}
            modules={quillModules}
            formats={quillFormats}
            placeholder={placeholder}
          />
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RichTextEditor;
