import React, { useEffect } from "react";
import styled from "styled-components";
import testImg from "../img/testImg.png"


function CardsList(props) {
  const { contents } = props;
  return (
      <CardsBox>
        <Thumbnail src={testImg}/>
        <CardTop>
          <div>{contents?.category}</div>
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
          <div>{contents?.endDate}</div>
        </CardBot>
        <PercentBar>
          <PercentValue per={contents?.percent} />
        </PercentBar>
      </CardsBox>
  )
}
export default CardsList;

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
`

const TotalSup = styled.div`
  font-size: var(--font1);
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
