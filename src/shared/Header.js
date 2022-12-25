import React from "react";
import styled from "styled-components";
import LogoSvg from "../styles/LogoSvg";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderView>
      <LogoSvg></LogoSvg>
      <HeaderTwo>
        <h5>프로젝트 올리기</h5>{" "}
        {/* 이부분은 나중에 글쓰기 페이지 완성했을때 Link로 변경*/}
        <HeaderIconDiv>
          <FaUserCircle style={{ color: "#e5e5e5" }} size="25px" />
          <HeaderIconFont>로그인/회원가입</HeaderIconFont>
        </HeaderIconDiv>
      </HeaderTwo>
    </HeaderView>
  );
};

export default Header;

const HeaderView = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderIconDiv = styled.div`
  width: 140px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 5px;
  padding-left: 10px;
  height: 43px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderIconFont = styled.h2`
  font-size: 13px;
  margin-left: 5px;
`;

const HeaderTwo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;
