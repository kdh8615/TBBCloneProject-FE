import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __signUp } from "../../redux/modules/loginSlice";
import LogoSvg from "../../styles/LogoSvg";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [checkLists, setCheckLists] = useState([]);

  // 체크박스로직
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
  // 체크박스 로직
  const onChangeTotal = (checked) => {
    if (checked) {
      const idArray = [];
      checkList.forEach((List) => idArray.push(List.id));
      setCheckLists(idArray);
    } else {
      setCheckLists([]);
    }
  };
  // 체크박스 로직
  const onChangeSingle = (checked, id) => {
    if (checked) {
      setCheckLists((prev) => [...prev, id]);
    } else {
      setCheckLists(checkLists.filter((list) => list !== id));
    }
  };

  const [nickname, setNickname] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginIdCheck, setLoginIdCheck] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [nicknameMsg, setNicknameMsg] = useState("");
  const [loginIdMsg, setLoginIdMsg] = useState("");
  const [loginIdCheckMsg, setLoginIdCheckMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordCheckMsg, setPasswordCheckMsg] = useState("");

  const [isNickname, setIsNickname] = useState(false);
  const [isLoginId, setIsLoginId] = useState(false);
  const [isLoginIdCheck, setIsLoginIdCheck] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);

  // const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  // const loginRegex =
  //   /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const onChangeNickname = useCallback((e) => {
    const nicknameView = e.target.value;
    setNickname(nicknameView);
    if (nicknameView.length < 2 || nicknameView.length > 20) {
      setNicknameMsg("이름은 2자 이상, 20자 이하로 입력하세요");
      setIsNickname(false);
    } else {
      setNicknameMsg("");
      setIsNickname(true);
    }
  }, []);

  const onChangeLoginId = useCallback(
    (e) => {
      const loginView = e.target.value;
      setLoginId(loginView);
      const loginRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!loginRegex.test(loginView)) {
        setLoginIdMsg("올바른 이메일 형식이 아닙니다");
        setIsLoginId(false);
      } else {
        setLoginIdMsg("");
        setIsLoginId(true);
      }
    },
    [loginId]
  );

  const onChangeLoginIdSub = useCallback((e) => {
    const login1View = e.target.value;
    setLoginIdCheck(login1View);

    if (loginId === login1View) {
      setLoginIdCheckMsg("이메일이 일치합니다");
      setIsLoginIdCheck(true);
    } else {
      setLoginIdCheckMsg("이메일이 일치하지 않습니다");
      setIsLoginIdCheck(false);
    }
  });

  const onChangePassword = useCallback(
    (e) => {
      const passwordView = e.target.value;
      setPassword(passwordView);
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      if (!passwordRegex.test(passwordView)) {
        setPasswordMsg("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
        setIsPassword(false);
      } else {
        setPasswordMsg("");
        setIsPassword(true);
      }
    },
    [password]
  );

  const onChangePasswordSub = useCallback((e) => {
    const password1View = e.target.value;
    setPasswordCheck(password1View);
    if (password === password1View) {
      setPasswordCheckMsg("비밀번호가 일치합니다");
      setIsPasswordCheck(true);
    } else {
      setPasswordCheckMsg("비밀번호가 일치하지 않습니다");
      setIsPasswordCheck(false);
    }
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__signUp({ nickname, password, loginId }));
    // alert("회원가입 성공");
    // navigate("/");
  };

  return (
    <SignUpTotal>
      <SignUpHeader>
        <Link to="/">
          <LogoSvg />
        </Link>
      </SignUpHeader>
      <SignUpHr />
      <form onSubmit={onSubmitHandler}>
        <SignUpBox>
          <SignH2>이메일로 가입하기</SignH2>
          <SignTitle>이름</SignTitle>
          <SignInputTotal
            placeholder="사용하실 이름을 입력해주세요."
            type="text"
            onChange={onChangeNickname}
            maxLength={20}
          />
          <span
            style={{ color: isNickname ? "skyblue" : "red", fontSize: "12px" }}
          >
            {nicknameMsg}
          </span>
          <SignTitle>이메일 주소</SignTitle>
          <SignInputTotal
            placeholder="이메일 주소를 입력해주세요."
            type="email"
            onChange={onChangeLoginId}
          />
          <span
            style={{ color: isLoginId ? "skyblue" : "red", fontSize: "12px" }}
          >
            {loginIdMsg}
          </span>
          <SignInputTotal
            placeholder="이메일 주소를 확인합니다."
            type="email"
            onChange={onChangeLoginIdSub}
          />
          <span
            style={{
              color: isLoginIdCheck ? "skyblue" : "red",
              fontSize: "12px",
            }}
          >
            {loginIdCheckMsg}
          </span>
          <SignTitle>비밀번호</SignTitle>
          <SignInputTotal
            placeholder="비밀번호를 입력해주세요."
            type="password"
            onChange={onChangePassword}
          />
          <span
            style={{ color: isPassword ? "skyblue" : "red", fontSize: "12px" }}
          >
            {passwordMsg}
          </span>
          <SignInputTotal
            placeholder="비밀번호를 확인합니다."
            type="password"
            onChange={onChangePasswordSub}
          />
          <span
            style={{
              color: isPasswordCheck ? "skyblue" : "red",
              fontSize: "12px",
            }}
          >
            {passwordCheckMsg}
          </span>
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
          <SignInButton
            disabled={
              !(
                isNickname &&
                isPassword &&
                isLoginId &&
                isLoginIdCheck &&
                isPasswordCheck
              )
            }
          >
            가입하기
          </SignInButton>
          <SignDownTitle>
            <div>이미 텀블럼 계정이 있으신가요?</div>
            <Link to={"/login"} style={{ color: "skyblue" }}>
              기존 계정으로 로그인하기
            </Link>
          </SignDownTitle>
        </SignUpBox>
      </form>
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

const SignInButton = styled.button`
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
