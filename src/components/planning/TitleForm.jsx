import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { setPlan, setIsPlan } from "../../redux/modules/planSlice";

import styled from "styled-components";

function TitleForm(props) {
  const { title, changeInput } = props;

  return (
    <div>
      <InputTitle
        name="title"
        required
        onChange={(event) => {changeInput(event)}}
        value={title}
        type="text"
        maxLength={32}
        placeholder="제목을 입력해주세요"></InputTitle>
      <AlertMsg>
        {(title === "") ? "필수입니다" : null}
      </AlertMsg>
      <CountMsg>
        {title.length}/32
      </CountMsg>
    </div>
  )
}

export default TitleForm;

const InputTitle = styled.input`
  border:1px solid var(--color1);
  padding: var(--pad2);
  width: 610px;
  font-size: var(--font3);
  caret-color: var(--color1);
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