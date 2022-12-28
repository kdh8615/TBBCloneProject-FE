import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlan } from "../../redux/modules/planSlice";

import styled from "styled-components";

function SummaryForm() {
  const { plan } = useSelector(state => state.plan);
  const dispatch = useDispatch();

  const changeInput = (e) =>{
    const { name, value } = e.target
    dispatch(setPlan({summary : value}))
  }
  return (
    <div>
      <InputSummary
        name="summary"
        required
        onChange={changeInput}
        value={plan.summary}
        placeholder="요약을 입력해주세요"></InputSummary>
      <AlertMsg>
        {(plan.summary === "") ? "필수입니다." : null}
      </AlertMsg>
    </div>
  )
}

export default SummaryForm;

const InputSummary = styled.textarea`
  border: 1px solid gray;
  height: 50px;
  padding: var(--pad2);
  width: 610px;
  font-size: var(--font3);
  caret-color: var(--color1);
  resize: none;
  &:focus {
  outline: 0;
  }
`
const AlertMsg = styled.div`
  color : var(--color1);
  font-size: var(--font1);
`