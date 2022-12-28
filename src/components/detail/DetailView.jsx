import React from "react";
import styled from "styled-components";

const DetailView = () => {
  return (
    <div>
      <FirstDiv>
        <li />
      </FirstDiv>
    </div>
  );
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
