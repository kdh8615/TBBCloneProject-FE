import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSvg from "../../styles/LogoSvg";

const SignUp = () => {
  const checkList = [
    {
      id: 1,
      title: "만 14세 이상입니다.(필수)",
    },
    {
      id: 2,
      title: "텀블럭 이용 약관 동의(필수)",
    },
    {
      id: 3,
      title: "개인정보 수집 및 이용 동의(필수)",
    },
    {
      id: 4,
      title: "개인정보 제 3자 제공 동의(선택)",
    },
    {
      id: 5,
      title: "마케팅 정보 수신 동의(선택)",
    },
  ];

  const [checkLists, setCheckLists] = useState([]);

  const onChangeTotal = (checked) => {
    if (checked) {
      const idArray = [];
      checkList.forEach((List) => idArray.push(List.id));
      setCheckLists(idArray);
    } else {
      setCheckLists([]);
    }
  };

  const onChangeSingle = (checked, id) => {
    if (checked) {
      setCheckLists((prev) => [...prev, id]);
    } else {
      setCheckLists(checkLists.filter((list) => list !== id));
    }
  };

  return (
    <SignUpTotal>
      <SignUpHeader>
        <LogoSvg />
      </SignUpHeader>
      <SignUpHr />
      <SignUpBox>
        <SignH2>이메일로 가입하기</SignH2>
        <SignTitle>이름</SignTitle>
        <SignInputTotal placeholder="사용하실 이름을 입력해주세요." />
        <SignTitle>이메일 주소</SignTitle>
        <SignInputTotal placeholder="이메일 주소를 입력해주세요." />
        <SignInputTotal placeholder="이메일 주소를 확인합니다." />
        <SignTitle>비밀번호</SignTitle>
        <SignInputTotal placeholder="비밀번호를 입력해주세요." />
        <SignInputTotal placeholder="비밀번호를 확인합니다." />
        <SignCheckBox>
          <TotalCheck>
            <SignCheckInput
              type="checkbox"
              name="select-all"
              onChange={(e) => onChangeTotal(e.target.checked)}
            />
            <TotalCheckH4>전체동의</TotalCheckH4>
          </TotalCheck>
          <SignUpHr />
          {checkList?.map((check) => (
            <div key={check.id}>
              <SignCheckInput
                type="checkbox"
                name={`select-${check.id}`}
                onChange={(e) => onChangeSingle(e.target.checked, check.id)}
                checked={checkLists.includes(check.id) ? true : false}
              />
              {check.title}
            </div>
          ))}
        </SignCheckBox>
        <SignInButton>가입하기</SignInButton>
        <SignDownTitle>
          <div>이미 텀블럼 계정이 있으신가요?</div>
          <Link to={"/login"} style={{ color: "skyblue" }}>
            기존 계정으로 로그인하기
          </Link>
        </SignDownTitle>
      </SignUpBox>
    </SignUpTotal>
  );
};

export default SignUp;

const SignUpTotal = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const SignUpHeader = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

const SignUpHr = styled.hr`
  border: 0.5px solid #e0dfdf;
`;

const SignUpBox = styled.div`
  width: 25%;
  border: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
  padding: 0 35px;
  margin: 85px auto 0;
  border-radius: 5px;
`;

const SignH2 = styled.h2`
  margin: 30px 0 30px;
`;

const SignInputTotal = styled.input`
  width: 90%;
  height: 35px;
  margin-top: 10px;
  padding-left: 10px;
  border: 1px solid #e7e7e7;
`;

const SignCheckBox = styled.div`
  font-size: 13px;
  width: 100%;
`;

const SignCheckInput = styled.input`
  margin-right: 10px;
  margin-top: 6px;
  zoom: 1.5;
  display: inline-block;
  vertical-align: -3px;
  accent-color: rgb(255, 87, 87);
  color: white;
`;

const SignTitle = styled.div`
  font-size: 15px;
  margin: 10px 0 5px;
`;

const SignInButton = styled.div`
  background-color: rgb(248, 100, 83);
  width: 100%;
  height: 50px;
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SignDownTitle = styled.div`
  margin: 20px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: rgb(158, 158, 158);
`;

const TotalCheck = styled.div`
  display: flex;
  flex-direction: row;
`;

const TotalCheckH4 = styled.h4`
  margin-top: 25px;
`;
