import { useState } from "react";
import { marked } from "marked";

// a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

function App() {
  const [previewTextState, setPreviewTextState] =
    useState(`# this is my  React markdown previewer
## this are some example of how write markdown
[freeCodeCampProfle](https://www.freecodecamp.org/Kkrilin)
\`<div></div>\` using to two backsteak
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item
> blockquote
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
**bold text**`);
  const [editorState, setEditorState] = useState(false);
  const [previewState, setPreviewState] = useState(false);

  const textareaHandler = (e) => {
    setPreviewTextState(e.target.value);
  };

  const editorChangeHandler = () => {
    setEditorState((state) => !state);
  };

  const previewChangeHandler = () => {
    setPreviewState((state) => !state);
  };

  return (
    <>
      <div
        className={`editor-container ${
          editorState ? "maximized" : previewState ? "hide" : ""
        }`}
      >
        <div className="toolbar">
          <p>Editor</p>
          <i
            className={`fa ${editorState ? "fa-compress" : "fa-arrows-alt"}`}
            onClick={editorChangeHandler}
          ></i>
        </div>
        <textarea
          id="editor"
          type="text"
          onChange={textareaHandler}
          value={previewTextState}
        ></textarea>
      </div>
      <div
        className={`preview-container ${
          editorState ? "hide" : previewState ? "maximized" : ""
        }`}
      >
        <div className="toolbar">
          <p>Previewer</p>
          <i
            className={`fa ${previewState ? "fa-compress" : "fa-arrows-alt"}`}
            onClick={previewChangeHandler}
          ></i>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(previewTextState, { breaks: true }),
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
