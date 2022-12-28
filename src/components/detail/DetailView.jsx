import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getDetail } from "../../redux/modules/detailSlice";

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getDetail(id));
  }, []);

  const detailContent = useSelector((state) => state.details.detail);
  let codes = detailContent?.content;
  return <div dangerouslySetInnerHTML={{ __html: codes }}></div>;
};

export default DetailView;

const FirstDiv = styled.div`
  height: 200px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  content: "";
  display: block;
  position: absolute;
  li {
    ::before {
      border: 3px solid black;
      border-radius: 10px;
      width: 9px;
      height: 9px;
      display: block;
      position: absolute;
      top: 0;
      z-index: 1;
      left: -7px;
      content: "";
    }
  }
`;
