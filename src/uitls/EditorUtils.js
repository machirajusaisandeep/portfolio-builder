import * as DOMPurify from "dompurify";

const SanitizeHtml = (html) => {
  return DOMPurify.sanitize(html);
};

export { SanitizeHtml };
