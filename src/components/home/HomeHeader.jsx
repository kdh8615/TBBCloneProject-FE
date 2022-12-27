import React from "react";
import styled from "styled-components";

function HomeHeader(){
  return(
    <Header>
      <ToggleBox>
        <Toggle>홈</Toggle>
        <Toggle>인기</Toggle>
        <Toggle>신규</Toggle>
        <Toggle>마감임박</Toggle>
        <Toggle>공개예정</Toggle>
      </ToggleBox>
    </Header>
  )
}

export default HomeHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  position: relative;
  top: 0;
  position: -webkit-sticky;
  position : sticky;
  z-index: 5;
  background-color: white;
  box-shadow: 0px 5px 5px -1px rgb(200,200,200);
`
const ToggleBox = styled.div`
  display: flex;
  width: var(--widthHome);
  margin: auto;

`

const Toggle = styled.div`
  line-height: 50px;
  font-size: var(--font2);
  margin-right: var(--pad2);
  padding: 0 var(--pad1);
  font-weight: bold;
  &:hover{
    color: var(--color1);
  }
  &:after{
    position: absolute;
    bottom: 0px;
    content: "";
    height: 5px;
    background-color: black;
    animation: 0.3s ease-in-out 0s 1 normal forwards running eclZLu;
  }
`