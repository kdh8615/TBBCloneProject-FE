import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getcontents, setFilter } from "../../redux/modules/contentsSlice";
import { categoryList } from "../feature/categoryList";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import CardsList from "./CardsList";

function Cards() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, error, contents, cate, filt } = useSelector((state) => state.contents)
  useEffect(() => {
    dispatch(__getcontents({ cate, filt }))
  }, [dispatch])

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading....</div>
  }
  if (error) {
    return <div style={{ textAlign: "center" }}>{error.message}</div>
  }


  return (
    <div>
      <HomeHead>
        <div>
          {categoryList[`${cate}`]}
        </div>
        <select onChange={(event) => { dispatch(setFilter(event.target.value)) }}>
          <option value="latest">최신순</option>
          <option value="popular">인기순</option>
        </select>
      </HomeHead>
      <HomeBody>
        
        {contents?.map(v => {
          return (
            <CardsList
              key={v.id}
              contents={v}
            />
          )
        })}
      </HomeBody>
    </div >

  )
}
export default Cards;

const HomeBody = styled.div`
  display: flex;
  width: 1160px;
  flex-wrap: wrap;
  margin: auto;
  gap: var(--pad2);
`

const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--pad1);
  padding: var(--pad1);
`