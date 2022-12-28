import React,{useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor.css'
import { setPlan , setImg} from "../../redux/modules/planSlice";
import { instanceAxios } from "../../api/axiosAPI";

function PlanEditor(props) {
  const editorRef = useRef();
  const { plan } = useSelector(state => state.plan);
  const dispatch = useDispatch();
  
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    dispatch(setPlan({content : data}))
  };

  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const uploadImg = async (data) =>{
    try{
      const res = await instanceAxios.post('/project/image', data , config);
      return res;
    } catch(error) {console.log(error);}
  }

  const onUploadImage = async (blob, callback) => {
    const data = new FormData();
		data.append("upload",blob);
    uploadImg(data)
      .then((res)=>{
        const {id, url} =  res.data.data ;
        callback(url , "img");
        dispatch(setImg(id))
      });

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
