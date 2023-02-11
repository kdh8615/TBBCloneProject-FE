import { instanceAxios } from "./axiosAPI";

// 로그인
export const postSignIn = async (post) => {
  try {
    const data = await instanceAxios.post("member/login", post);

    if (data.status === 200) {
      return data;
    } else {
      alert("아이디, 비밀번호를 잘못입력하셨습니다.");
    }
  } catch (error) {}
};
