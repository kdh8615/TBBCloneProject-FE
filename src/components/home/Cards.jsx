import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getcontents } from "../../redux/modules/contentsSlice";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import testImg from "../../img/testImg.png"

import "./style.css"
import CardsList from "../CardsList";

function Cards() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, error, contents } = useSelector((state) => state.contents)
  useEffect(() => {
    dispatch(__getcontents())
  }, [dispatch])

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading....</div>
  }
  if (error) {
    return <div style={{ textAlign: "center" }}>{error.message}</div>
  }

  return (
    <HomeBody>
      {contents.map(v=>{
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
`