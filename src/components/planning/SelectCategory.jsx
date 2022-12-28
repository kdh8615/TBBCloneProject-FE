import React from "react"
import { useDispatch, useSelector } from "react-redux";

import { category } from "../feature/category";
import styled from "styled-components";
import { setPlan } from "../../redux/modules/planSlice";

function SelectCategory() {
  const { plan } = useSelector(state => state.plan);
  const dispatch = useDispatch();
  console.log(plan)
  const categoryList = [];
  Object.keys(category).forEach((key, i) => {
    categoryList.push(<option key={i} value={key}>{category[key]}</option>)
  })
  const changeInput = (e) =>{
    const { name, value } = e.target
    dispatch(setPlan({category : value}))
  }
  return (
    <div>
      <DescTitle>카테고리</DescTitle>
        <CategorySelect
          name="category"
          required
          onChange={changeInput}
          value={plan.category}>
          <option value="" hidden>선택 해주세요</option>
          {categoryList}
        </CategorySelect>
    </div>
  )
}
export default SelectCategory;


const DescTitle = styled.div`
  font-weight: bold;
  font-size: var(--font1);
  padding-bottom: var(--pad1);
`
const DescDetail = styled.div`
  width: 210px;
  font-size: var(--font1);
`


const CategorySelect = styled.select`
  padding: var(--pad1);
  border-color: rgb(200,200,200);
  background:url(../../img/arrowDown.svg);

`