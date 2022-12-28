import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlan } from "../../redux/modules/planSlice";

import styled from "styled-components";

function ImageForm() {
  const { plan } = useSelector(state => state.plan);
  const dispatch = useDispatch();
  const [images, setImages] = useState();
  const changeInput = (e) => {
    const { name, value } = e.target
    dispatch(setPlan({ summary: value }))
  }
  const changeUploadFile = async (event) => {
    const { name, files } = event.target;
		setImages([...images, ...files]);
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
