import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsPlan, setPlan } from "../../redux/modules/planSlice";

import styled from "styled-components";

function SummaryForm(props) {
  const { summary , changeInput } = props
  return (
    <div>
      <InputSummary
        name="summary"
        required
        onChange={(event) => {changeInput(event)}}
        value={summary}
        maxLength={50}
        placeholder="요약을 입력해주세요"></InputSummary>
      <AlertMsg>
        {(summary === "") ? "필수입니다." : null}
      </AlertMsg>
      <CountMsg>
        {summary.length}/50
      </CountMsg>
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
const CountMsg = styled.div`
  color : var(--color1);
  font-size: var(--font1);
  display: flex;
  justify-content: flex-end;
`