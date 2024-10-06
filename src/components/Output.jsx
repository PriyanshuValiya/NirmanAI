import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { Copy } from "lucide-react";

function Output({ aiOutput }) {
  const editorRef = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleOnClick = () => {
    let text = editorRef.current.getInstance().getMarkdown();
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Content Copied To Clipboard..");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-7/12 pt-3">
        <div className="bg-white shadow-lg border">
          <div className="flex justify-between items-center">
            <h2 className="ml-5 text-xl font-semibold">Your Result</h2>
            <Button
              className="bg-purple-500 text-white hover:bg-purple-600"
              onClick={handleOnClick}
            >
              <Copy className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Editor
          ref={editorRef}
          initialValue="Generate Your Dream With NirmansAI"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={() =>
            console.log(editorRef.current.getInstance().getMarkdown())
          }
        />
      </div>
    </>
  );
}

export default Output;
