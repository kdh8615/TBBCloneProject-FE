import React from "react";
import styled from "styled-components";
import PlanEditor from "../components/PlanEditor";

import { VscQuestion } from 'react-icons/vsc';
import {FaStarOfLife} from 'react-icons/fa'

import titleImg from "../img/planning/title_img.png"
import uploadImg from "../img/planning/upload_img.png"

function Planning() {
  return (
    <PlanningForm>
      <Column>
        <DescL>
          <ColTitle>프로젝트 카테고리<FaStarOfLife size={"10px"} color="var(--color1)"/></ColTitle>
          <ColDescription>프로젝트 성격과 가장 일치하는 카테고리를 선택해주세요.<br></br>
            적합하지 않을 경우 운영자에 의해 조정될 수 있습니다.</ColDescription>
        </DescL>
        <div>
          <div>카테고리</div>
          <CategorySelect>
            <option>보드게임・TRPG</option>
          </CategorySelect>
        </div>
        <div>

        </div>
      </Column>
      <Column>
        <DescL>
          <ColTitle>프로젝트 제목<FaStarOfLife size={"10px"} color="var(--color1)"/></ColTitle>
          <ColDescription>프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요..</ColDescription>
        </DescL>
        <ColDetail>
          <div>제목<VscQuestion color="var(--color1)" /></div>
          <DescR>
            <DescDetail>제목은 어디에 쓰이나요?</DescDetail>
            <DesImg src={titleImg} alt="" />
          </DescR>
          <InputTitle type="text" placeholder="제목을 입력해주세요"></InputTitle>
        </ColDetail>
      </Column>
      <Column>
        <DescL>
          <ColTitle>프로젝트 대표 이미지<FaStarOfLife size={"10px"} color="var(--color1)"/></ColTitle>
          <ColDescription>후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있도록 이미지 가이드라인을 따라 주세요.</ColDescription>
        </DescL>
        <ColDetail>
          <div><VscQuestion color="var(--color1)" /></div>
          <DesImg src={uploadImg} alt="" />
          <input type="file" accept=".jpg .jpeg .png"></input>
        </ColDetail>
      </Column>

      <Column>
        <DescL>
          <ColTitle>프로젝트 소개<FaStarOfLife size={"10px"} color="var(--color1)"/></ColTitle>
          <ColDescription>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</ColDescription>
        </DescL>
        <ColDetail>
          <PlanEditor />
        </ColDetail>
      </Column>
    </PlanningForm>
  )
}
export default Planning;

const Column = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  /* margin: var(--pad2); */
  padding-bottom: var(--pad3);
  border-bottom:1px solid gray;
  margin-bottom: var(--pad3);
`
const ColTitle = styled.div`
  font-size: var(--font3);
  font-weight: bold;
  margin-bottom: var(--pad2);
`
const ColDescription = styled.div`
  font-size : var(--font2);
`

const ColDetail = styled.div`
  width: 630px;
`


const PlanningForm = styled.div`
  background-color: rgb(240, 240, 240);
  width: 1080px;
  margin: auto;
  margin-top: var(--pad3);
`

const InputTitle = styled.input`
  border:1px solid var(--color1);
  padding: var(--pad1);
  width: 600px;
  caret-color: var(--color1);
  &:focus {
  outline: 0;
}
`

const CategorySelect = styled.select`
  padding: var(--pad1);
  border-color: rgb(200,200,200);
  &:focus{
    outline: 1px;
  }
`
const DescL = styled.div`
  width: 350px;
`

const DescR = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 5px 0px gray;
  border-radius: 5px;
  width: 630px;
  margin-bottom: var(--pad1);
  margin-top: var(--pad1);
  padding: var(--pad2);

`
const DescDetail = styled.div`
  flex:1;
`
const DesImg = styled.img`
  flex: 2;
  width: 300px;
  background-size: cover;
`