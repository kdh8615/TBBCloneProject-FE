import React from "react";
import styled from "styled-components";

const DetailMiddle = (props) => {
  return (
    <MiddleLine>
      <MiddleDiv>
        <button onClick={() => props.setTest(false)}>프로젝트 계획</button>
        <button onClick={() => props.setTest(true)}>커뮤니티</button>
      </MiddleDiv>
    </MiddleLine>
  );
};

export default DetailMiddle;

const MiddleLine = styled.div`
  margin-top: 30px;
  border: 1px solid white;
  background-color: #ffffff;
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const MiddleDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  font-size: 15px;

  button {
    width: 100px;
    background-color: white;
    border: 1px solid white;
    margin-top: 8px;
  }
`;
