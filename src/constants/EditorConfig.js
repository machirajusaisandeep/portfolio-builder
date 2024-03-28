const TINY_MCE_API_KEY = "v69y50enilvgbvwhhmqux3f1jbvhgq6xk0rrp05pi70m7sc5";

const EditorInitialConfig = {
  menubar: false,
  inline: true,
  plugins: ["lists", "powerpaste", "autolink"],
  toolbar: "undo redo | bold italic underline",
  valid_elements: "strong,em,span[style],a[href]",
  valid_styles: {
    "*": "font-size,font-family,color,text-decoration,text-align",
  },
  // ai_request: (request, respondWith) =>
  //   respondWith.string(() =>
  //     Promise.reject("See docs to implement AI Assistant")
  //   ),
};

export { TINY_MCE_API_KEY, EditorInitialConfig };
