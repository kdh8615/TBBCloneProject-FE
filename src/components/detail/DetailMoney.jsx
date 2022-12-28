import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __postMoney } from "../../redux/modules/detailSlice";

const DetailMoney = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [money, setMoney] = useState(0);
  const onChangeMoney = (e) => {
    const { name, value } = e.target;
    setMoney(parseInt(value));
  };

  const onClickMoney = () => {
    dispatch(__postMoney({ id, money }));
  };

  return (
    <div>
      <MoneyView>
        <h1>후원</h1>
        <div>후원금</div>
        <input
          type="number"
          name="totalMoney"
          onChange={onChangeMoney}
          value={money}
        />
        <h6>더 후원해주시면 프로젝트 성사가 앞당겨집니다.</h6>
        <MoneyButton>
          <button onClick={() => setMoney(parseInt(money + 5000))}>
            +5천 원
          </button>
          <button onClick={() => setMoney(parseInt(money + 10000))}>
            +1만 원
          </button>
          <button onClick={() => setMoney(parseInt(money + 50000))}>
            +5만 원
          </button>
          <button onClick={() => setMoney(parseInt(money + 100000))}>
            +10만 원
          </button>
        </MoneyButton>
        <MoneyGo onClick={() => onClickMoney()}>
          <h3>후원하기</h3>
        </MoneyGo>
      </MoneyView>
    </div>
  );
};
export default DetailMoney;

const MoneyView = styled.div`
  padding: 20px 50px;
  width: 250px;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 50px;
  right: 0;
  border-radius: 5px;
  input {
    margin-top: 20px;
    width: 97%;
    height: 30px;
  }
`;

const MoneyButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    margin-top: -5px;
    width: 70px;
    height: 35px;
    font-size: 10px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.15);
    :hover {
      background-color: #e4e4e4;
    }
  }
`;

const MoneyGo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-top: 20px;
  border: 1px solid white;
  background-color: rgb(255, 87, 87);
  color: white;
  :hover {
    background-color: rgba(255, 70, 80, 0.9);
    color: #dbdbdb;
  }
`;
