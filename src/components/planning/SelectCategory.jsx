import React from "react"

import { categoryList } from "../feature/categoryList";
import styled from "styled-components";

function SelectCategory(props) {
  const { category , changeInput } = props

  const cList = [];
  Object.keys(categoryList).forEach((key, i) => {
    cList.push(<option key={i} value={key}>{categoryList[key]}</option>)
  })

  return (
    <div>
      <DescTitle>카테고리</DescTitle>
        <CategorySelect
          name="category"
          required
          onChange={changeInput}
          value={category}>
          <option value="" hidden>선택 해주세요</option>
          {cList}
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