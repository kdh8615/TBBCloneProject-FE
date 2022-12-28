import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getcontents } from "../../redux/modules/contentsSlice";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import CardsList from "./CardsList";

function Cards() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, error, contents , cate, filt } = useSelector((state) => state.contents)
  useEffect(() => {
    dispatch(__getcontents({cate, filt}))
  }, [dispatch])

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading....</div>
  }
  if (error) {
    return <div style={{ textAlign: "center" }}>{error.message}</div>
  }
  console.log(contents)

  return (
    <HomeBody>
      {contents?.map(v=>{
        return(
          <CardsList 
            key = {v.id}
            contents = {v}
          />
        )
      })}
    </HomeBody>
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