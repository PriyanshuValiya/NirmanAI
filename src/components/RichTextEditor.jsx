import React, { useState } from "react";
import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnUnderline,
  BtnStrikeThrough,
  Separator,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
} from "react-simple-wysiwyg";

function RichTextEditor({onRichTextEditorChange}) {
  const [value, setValue] = useState("");
  return (
    <>
      <EditorProvider>
        <Editor value={value} onChange={(e) => {setValue(e.target.value); onRichTextEditorChange(e)}}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </>
  );
}

export default RichTextEditor;
