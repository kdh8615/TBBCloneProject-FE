import React,{useRef, useState} from "react";
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor.css'

function PlanEditor() {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };

  const onUploadImage = async (blob, callback) => {
    console.log(blob)
  };

  return(
    <Editor 
      ref={editorRef}
      initialValue="hello react editor world"
      previewStyle="vertical"
      height = "600px"
      width = "500px"
      language="ko-KR"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      onChange={onChange}
      hooks={{
        addImageBlobHook: onUploadImage
      }}
    />
  )
}

export default PlanEditor;
