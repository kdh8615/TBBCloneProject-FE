import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { setPlan } from "../../redux/modules/planSlice";

import styled from "styled-components";

function TitleForm() {
  const { plan } = useSelector(state => state.plan);
  const dispatch = useDispatch();

  const changeInput = (e) =>{
    const { name, value } = e.target
    dispatch(setPlan({title : value}))
  }
  return (
    <div>
      <InputTitle
        name="title"
        required
        onChange={changeInput}
        value={plan.title}
        type="text"
        placeholder="제목을 입력해주세요"></InputTitle>
      <AlertMsg>
        {(plan.title === "") ? "필수입니다" : null}
      </AlertMsg>
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