import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillEditor = dynamic(() => import("react-quill"), {
  ssr: false,

  loading: () => <p>Loading ...</p>,
});

export default function Home() {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
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

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <QuillEditor
      value={content}
      onChange={handleEditorChange}
      modules={quillModules}
      formats={quillFormats}
      style={{ height: "200px", borderRadius: "5px" }}
      placeholder="Write notification content..."
      className="w-full mb-10 bg-white"
    />
  );
}
