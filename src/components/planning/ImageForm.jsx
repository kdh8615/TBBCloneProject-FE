import React, { useState } from "react";
import { instanceAxios } from "../../api/axiosAPI";

import styled from "styled-components";

const config = { headers: { 'Content-Type': 'multipart/form-data' } };
const uploadImg = async (data) =>{
  try{
    const res = await instanceAxios.post('/project/thumbnail', data , config);
    return res;
  } catch(error) {console.log(error);}
}

function ImageForm(props) {
  const { thumbnailImageUrl , changeInput, setThumbnail } = props
  const [images, setImages] = useState();

  const changeUploadFile = async (event) => {
    event.preventDefault();
    const { files } = event.target;
    console.log()
    const data = new FormData();
    data.set("upload",files[0]);
    uploadImg(data)
    .then((res)=>{
      console.log(res)
      const {id, url} =  res.data.data ;
      setThumbnail(url)
    });
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*,.png,.jpg,.jpeg,.gif"
        onChange={(event) => { changeUploadFile(event) }}
      ></input>
    </div>
  )
}

export default ImageForm;
