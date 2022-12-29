import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { __getcontents, setCategory } from "../../redux/modules/contentsSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import testImg from "../../img/testImg.png"
import { categoryList } from "../feature/categoryList";

import { diffDate } from "../feature/dateCalc";

import {FaHeart, FaRegHeart } from "react-icons/fa";

function CardsList(props) {
  const { contents } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filitering = async (key) =>{
    await dispatch(setCategory(key))
  }

  const date = diffDate(contents?.endDate);

  return (
    <CardsBox >
      <LikeBtn />
        <Thumbnail src={testImg} onClick={()=>navigate(`detail/${contents?.projectId}`)}/>
        <CardTop>
          <div
            onClick={()=>{filitering(contents?.category)}}>
            {categoryList[`${contents?.category}`]}
          </div>
          &nbsp;|&nbsp;
          <div>{contents?.nickname}</div>
        </CardTop>
        <Title>{contents?.title}</Title>
        <Summary>{contents?.summary}</Summary>
        <CardBot>
          <LeftBot>
            <Percent>{contents?.percent}%</Percent>
            <TotalSup>{Number(contents?.totalSupport).toLocaleString()}원</TotalSup>
          </LeftBot>
          <DiffDate>{date}</DiffDate>
        </CardBot>
        <PercentBar>
          <PercentValue per={contents?.percent} />
        </PercentBar>
    </CardsBox>
  )
}
export default CardsList;

const LikeBtn = styled(FaRegHeart)`
  display: flex;
  position: relative;
  z-index: 2;
  top: 40px;
  left: 240px;
  ;
`

const CardsBox = styled.div`
  width: 275px;
  height: 450px;
  display: flex;
  flex-direction: column;
  gap: var(--pad1);
`
const Thumbnail = styled.img`
  object-fit: cover;
  width: 275px;
  height: 240px;
  background-position: center;
`

const CardTop = styled.div`
  display: flex;
  font-size: var(--font1);
  color: gray;
`
const Title = styled.div`
  font-size: var(--font3);
  font-weight: bold;
`

const Summary = styled.div`
  font-size: var(--font2);
  color: gray;
  height: 75px;
`
const CardBot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: end;
`

const TotalSup = styled.div`
  font-size: var(--font1);
  display: flex;
  align-items: flex-end;
`
const LeftBot = styled.div`
  display: flex;
  gap: var(--pad1);
`

const Percent = styled.div`
  color: var(--color1);
  font-size: var(--font3);
  font-weight: bold;
`

const PercentBar = styled.div`
  background: rgb(200, 200, 200);
  justify-content: flex-start;
  align-items: center;
  position: relative;
  display: flex;
  height: 5px;
`
const PercentValue = styled.div`
  background: var(--color1);
  height: 5px;
  width: ${props => props.per}%;
`
const DiffDate = styled.div`
  font-size: var(--font1);
  font-weight: bold;
`