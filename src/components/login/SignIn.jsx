import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSvg from "../../styles/LogoSvg";

const SignIn = () => {
  return (
    <LoginTotal>
      <LoginView>
        <LoginViewIn>
          <LogoSvg></LogoSvg>
          <LoginTitle>이메일로 로그인</LoginTitle>
          <LoginText>이메일 주소</LoginText>
          <LoginInput placeholder="이메일 주소를 입력해주세요"></LoginInput>
          <LoginText>비밀번호</LoginText>
          <LoginInput placeholder="비밀번호를 입력해주세요"></LoginInput>
          <LoginButton>로그인</LoginButton>
          <UnderBar>다른 방법으로 로그인</UnderBar>
          <NewCreate>
            아직 텀블벅 계정이 없으신가요?
            <Link to={"/join"} style={{ color: "skyblue" }}>
              회원가입
            </Link>
          </NewCreate>
        </LoginViewIn>
      </LoginView>
      <LoginImg
        src="https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/static_assets/login/bg_login_email.jpg"
        alt="이미지"
      ></LoginImg>
    </LoginTotal>
  );
};

export default SignIn;

const LoginTotal = styled.div`
  width: 100%;
  display: flex;
`;

const LoginImg = styled.img`
  width: 50%;
  height: 750px;
`;

const LoginView = styled.div`
  width: 50%;
`;

const LoginTitle = styled.h2`
  margin: 25px 0 35px;
  font-size: 25px;
`;

const LoginViewIn = styled.div`
  width: 60%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  margin: 20px auto 0;
`;

const LoginText = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;

const LoginInput = styled.input`
  width: 97%;
  margin-top: 15px;
  height: 40px;
  border: 1px solid rgb(220, 220, 220);
  padding-left: 10px;
`;

const LoginButton = styled.button`
  margin: 45px 0 75px;
  background-color: rgb(248, 100, 83);
  height: 50px;
  border: 1px solid rgb(248, 100, 83);
  color: white;
  font-size: 17px;
`;

const UnderBar = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: gray;
  font-size: 12px;
  margin: 8px 0;
  ::before {
    content: "";
    flex-grow: 1;
    background: #bebebe;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
  ::after {
    content: "";
    flex-grow: 1;
    background: #bebebe;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

const NewCreate = styled.div`
  color: gray;
  font-size: 13px;
`;
