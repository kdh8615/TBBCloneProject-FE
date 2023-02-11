import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setPlan , setIsPlan} from "../../redux/modules/planSlice";
import { NumericFormat } from 'react-number-format';

import styled from "styled-components";

function MoneyForm(props) {
  const { goalPrice , setGoalPrice} = props
  const [price, setPrice] = useState(0);
  let num ;
  const changeInput = (event) =>{
    setPrice(event.target.value)
    num = price.replaceAll(",","");
    num = Number(num)
    setGoalPrice(num)
  }
  return (
    <div>
      <InputMoney
        required
        name="goalPrice"
        onChange={(event)=>changeInput(event)}
        value={price}
        thousandSeparator=","
        allowLeadingZeros
        maxLength={15}
        // suffix={'원'}
        placeholder="50만원 이상의 금액을 입력해주세요" />
      <GrayBox>
        <CalcList
          style={{
            borderBottom: "1px solid gray",
          }}>
          <DescDetail>목표 금액 달성시 예상 수령액</DescDetail>
          <RedCalc>{price}원</RedCalc>
        </CalcList>
        <CalcList>
          <CalcTitle>총 수수료</CalcTitle>
          <CalcResult>{price}원</CalcResult>
        </CalcList>
        <CalcList>
          <CalcTitle>결제대행 수수료(총 결제액의 3% + VAT)</CalcTitle>
          <CalcResult>{price * 0.03}원</CalcResult>
        </CalcList>
        <CalcList>
          <CalcTitle>Basic 요금제 수수료(총 결제 금액의 5% + VAT)</CalcTitle>
          <CalcResult>{price * 0.05}원</CalcResult>
        </CalcList>
      </GrayBox>
    </div>
  )
}

export default MoneyForm;

const GrayBox = styled.div`
  background-color: rgb(240, 240, 240) ;
  padding: var(--pad2);
`
const RedCalc = styled.div`
  color: var(--color1);
  font-size: var(--font4);
  font-weight: bold;
`

const CalcList = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--pad1);
`

const CalcTitle = styled.div`
  color: gray;
  font-size: var(--font1);
`
const CalcResult = styled.div`
  font-size: var(--font1);
`

const InputMoney = styled(NumericFormat)`
  text-align: right;
  border:1px solid var(--color1);
  padding: var(--pad2);
  margin-bottom: var(--pad2);
  width: 580px;
  font-size: var(--font3);
  caret-color: var(--color1);
  &:focus {
  outline: 0;
  }
`

const DescDetail = styled.div`
  width: 210px;
  font-size: var(--font1);
`