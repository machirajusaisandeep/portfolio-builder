import RichTextEditor from "@/common/RichTextEditor";
import {
  TINY_MCE_API_KEY,
  EditorInitialConfig,
} from "@/constants/EditorConfig";
import { SanitizeHtml } from "@/uitls/EditorUtils";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [content, setContent] = useState({ html: null, text: null });

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <div>
      <RichTextEditor value={content.html} setValue={setContent} />
      <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
    </div>
  );
}
