import React from "react";
import styled from "styled-components";
import LogoSvg from "../styles/LogoSvg";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCookies } from "../api/cookie";
import { useCookies } from "react-cookie";
const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const tokenH = getCookies("id");
  const logOut = () => {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      return;
    } else {
      removeCookie("id", { path: "/" });
    }
  };

  if (!tokenH) {
    return (
      <HeaderView>
        <Link to="/">
          <LogoSvg />
        </Link>
        <HeaderTwo>
          <Link to="/planning" style={{ textDecoration: "none" }}>
            <h5>프로젝트 올리기</h5>{" "}
          </Link>
          {/* 이부분은 나중에 글쓰기 페이지 완성했을때 Link로 변경*/}
          <HeaderIconDiv>
            <FaUserCircle style={{ color: "#e5e5e5" }} size="25px" />
            <Link to="/login" style={{ textDecoration: "none" }}>
              <HeaderIconFont>로그인/회원가입</HeaderIconFont>
            </Link>
          </HeaderIconDiv>
        </HeaderTwo>
      </HeaderView>
    );
  } else {
    return (
      <HeaderView>
        <Link to="/">
          <LogoSvg />
        </Link>
        <HeaderTwo>
          <Link to="/planning" style={{ textDecoration: "none" }}>
            <h5>프로젝트 올리기</h5>{" "}
          </Link>
          <HeaderIconDiv>
            <FaUserCircle style={{ color: "#e5e5e5" }} size="25px" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <HeaderIconFont onClick={logOut} style={{ marginLeft: "20px" }}>
                로그아웃
              </HeaderIconFont>
            </Link>
          </HeaderIconDiv>
        </HeaderTwo>
      </HeaderView>
    );
  }
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

const HeaderIconFont = styled.button`
  font-size: 13px;
  margin-left: 10px;
  color: black;
  background-color: transparent;
  border: 1px solid white;
`;

const HeaderTwo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;
