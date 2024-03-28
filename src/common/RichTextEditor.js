import {
  TINY_MCE_API_KEY,
  EditorInitialConfig,
} from "@/constants/EditorConfig";
import { SanitizeHtml } from "@/uitls/EditorUtils";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function RichTextEditor({ value, setValue, isDevMode }) {
  const editorRef = useRef(null);
  const log = () => {
    if (isDevMode && editorRef.current) {
      const sanitizedContent = SanitizeHtml(editorRef?.current?.getContent());
      console.log(sanitizedContent);
    }
  };

  const handleInit = (evt, editor) => (editorRef.current = editor);
  const handleUpdate = (newValue, editor) => {
    setValue({
      html: SanitizeHtml(newValue),
      text: editor.getContent({ format: "text" }),
    });
  };

  return (
    <div>
      <Editor
        onInit={handleInit}
        apiKey={TINY_MCE_API_KEY}
        init={EditorInitialConfig}
        initialValue={value}
        onEditorChange={handleUpdate}
        inline
      />
      {isDevMode ? <button onClick={log}>Log editor content</button> : null}
    </div>
  );
}
