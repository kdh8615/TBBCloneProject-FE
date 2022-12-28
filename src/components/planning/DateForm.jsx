import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlan } from "../../redux/modules/planSlice";
import moment from 'moment';

import styled from "styled-components";

function DateForm() {
  const { plan } = useSelector(state => state.plan);
  const dispatch = useDispatch();

  const changeStart = (e) => {
    const { value } = e.target
    dispatch(setPlan({ startDate : value }))
  }
  const changeEnd = (e) => {
    const { value } = e.target
    dispatch(setPlan({ endDate : value }))
  }
  const date = new Date();
  // +T00:00:00
  return (
    <div>
        <li>
          <div>시작일</div>
          <input
            name="startDate"
            onChange={changeStart}
            value={plan.startDate}
            type="date"
            placeholder="시작 날짜를 선택해주세요"></input>
        </li>
        <li>
          <div>펀딩 기간</div>
          <div>최대 60일</div>
        </li>
        <li>
          <div>종료일</div>
          <input
            name="endDate"
            onChange={changeEnd}
            value={plan.endDate}
            type="date"
            placeholder="시작 날짜를 선택해주세요"></input>
        </li>
        <li>
          후원자 결제 종료
          종료일 다음 날부터 7일
        </li>
        <li>
          정산일
          후원자 결제 종료 다음 날부터 7영업일
        </li>
    </div>
  )
}

export default DateForm;

const TLContent = styled.div`
  margin: 1rem;
  font-weight:bold;
  font-size: var(--font2);
  color: black;
`
const TimeLine = styled.ul`
  list-style: none;
  & > li{
    transform: scale(1.0);
  }
  & > li::after{
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    height: 100%;
    border-left: 1px solid black;
  }
`