import { Editor } from "@tinymce/tinymce-react";

export type TextEditorProps = {
  id: string;
  value: string;
  onChange: (content: string) => void;
};
export default function TextEditor({ id, value, onChange }: TextEditorProps) {
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
