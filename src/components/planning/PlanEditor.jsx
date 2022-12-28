import React,{useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor.css'
import { setPlan } from "../../redux/modules/planSlice";

function PlanEditor(props) {
  const editorRef = useRef();
  const { plan } = useSelector(state => state.plan);
  const dispatch = useDispatch();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    dispatch(setPlan({content : data}))
  };

  const onUploadImage = async (blob, callback) => {
    console.log(blob)
  };

  return(
    <Editor 
      ref={editorRef}
      initialValue="hello react editor world"
      previewStyle="vertical"
      height = "300px"
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
