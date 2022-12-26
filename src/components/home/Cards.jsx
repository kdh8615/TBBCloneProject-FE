import React from "react";

import styled from "styled-components";

import testImg from "../../img/testImg.png"

function Cards(){
  return(
    <CardsBox>
      <Thumbnail src={testImg} />
    </CardsBox>
  )
}

export default Cards;

const CardsBox = styled.div`
  width: 275px;

`

const Thumbnail = styled.img`
  width: 275px;
  height: 240px;
  background-size: cover;
  background-position: center;

`