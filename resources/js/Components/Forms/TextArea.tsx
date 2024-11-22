import { Editor } from "@tinymce/tinymce-react";

export type TextAreaProps = {
  id: string;
  value: string;
  onChange: (content: string) => void;
};
export default function TextArea({ id, value, onChange }: TextAreaProps) {
  const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;
  const handleEditorChange = (content: string) => {
    onChange(content);
  };

  return (
    <Editor
      id={id}
      apiKey={apiKey}
      value={value}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat",
        content_style:
          "body { font-family:Montserrat,sans-serif; font-weight:100; font-size:1rem }",
      }}
      onEditorChange={handleEditorChange}
    />
  );
}
