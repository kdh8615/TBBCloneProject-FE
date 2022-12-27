import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PlanEditor from "../components/PlanEditor";
import { NumericFormat } from 'react-number-format';

import { VscQuestion } from 'react-icons/vsc';
import { VscInfo } from 'react-icons/vsc';

import { FaStarOfLife } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";


import titleImg from "../img/planning/title_img.png"
import uploadImg from "../img/planning/upload_img.png"
import summaryImg from "../img/planning/summary_img.png"

function Planning() {
  const [plan, setPlan] = useState({
    title: "",
    category :"",
    summary: "",
    goalPrice: 0,
    startDate: "",
    endDate: "",
    imageList: [],
    delList: []
  })
  const changeInput = (e) => {
    const { name, value } = e.target
    setPlan({ ...plan, [name]: value })
  }
  return (
    <PlanningForm>
      <Column>
        <DescL>
          <ColTitle>프로젝트 카테고리<FaStarOfLife size={"10px"} color="var(--color1)"/></ColTitle>
          <ColDescription>프로젝트 성격과 가장 일치하는 카테고리를 선택해주세요.<br></br>
            적합하지 않을 경우 운영자에 의해 조정될 수 있습니다.</ColDescription>
        </DescL>
        <div>
          <DescTitle>카테고리</DescTitle>
          <SelectArrow>
            <CategorySelect
              name="category"
              required
              onChange={changeInput}
              value={plan.category}>
              <option>보드게임・TRPG</option>
            </CategorySelect>
          </SelectArrow>
        </div>
        <div>
        </div>
      </Column>
      <Column>
        <DescL>
          <ColTitle>프로젝트 제목<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
          <ColDescription>프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요..</ColDescription>
        </DescL>
        <ColDetail>
          <DescTitle>제목<VscQuestion color="var(--color1)" /></DescTitle>
          <DescR>
            <DescDetail>제목은 어디에 쓰이나요?</DescDetail>
            <DesImg src={titleImg} alt="" />
          </DescR>
          <InputTitle 
            name="title"
            required
            onChange={changeInput}
            value={plan.title}
            type="text" 
            placeholder="제목을 입력해주세요"></InputTitle>
          <AlertMsg>
            {(plan.title === "")? "필수입니다" : null}
          </AlertMsg>
        </ColDetail>
      </Column>
      <Column>
        <DescL>
          <ColTitle>프로젝트 요약<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
          <ColDescription>후원자 분들이 프로젝트를 빠르게 이해할 수 있도록 명확하고 간략하게 소개해주세요.</ColDescription>
        </DescL>
        <ColDetail>
          <DescTitle><VscQuestion color="var(--color1)" /></DescTitle>
          <DescR>
            <DescDetail>프로젝트 요약은 어디에 표시되나요?</DescDetail>
            <DesImg src={summaryImg} alt="" />
          </DescR>
          <InputSummary 
            name="summary"
            required
            onChange={changeInput}
            value={plan.summary}
            placeholder="요약을 입력해주세요"></InputSummary>
          <AlertMsg>
            {(plan.summary === "")? "필수입니다." : null}
          </AlertMsg>
        </ColDetail>
      </Column>
      <Column>
        <DescL>
          <ColTitle>프로젝트 대표 이미지<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
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
          <ColTitle>프로젝트 소개<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
          <ColDescription>무엇을 만들기 위한 프로젝트인지 분명히 알려주세요.</ColDescription>
        </DescL>
        <ColDetail>
          <PlanEditor />
        </ColDetail>
      </Column>
      <Column>
        <DescL>
          <ColTitle>목표금액<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
          <ColDescription>프로젝트를 완수하기 위해 필요한 금액을 설정해주세요.</ColDescription>
          <WarnMsg>
            <DescTitle><VscInfo color="var(--color1)" /> 목표 금액 설정 시 꼭 알아두세요!</DescTitle>
            <ul>
              <InfoLi>
                종료일까지 목표금액을 달성하지 못하면 후원자 결제가 진행되지 않습니다.
              </InfoLi>
              <InfoLi>
                종료 전 후원 취소를 대비해 10% 이상 초과 달성을 목표로 해주세요.
              </InfoLi>
              <InfoLi>
                제작비, 선물 배송비, 인건비, 예비 비용 등을 함께 고려해주세요.
              </InfoLi>
            </ul>
          </WarnMsg>
        </DescL>
        <DescColumn>
          <DescTitle>목표금액</DescTitle>
          <InputMoney
            required
            name="goalPrice"
            onChange={changeInput}
            value={plan.goalPrice}
            thousandSeparator=","
            allowLeadingZeros
            suffix={'원'}
            placeholder="50만원 이상의 금액을 입력해주세요" />
          <GrayBox>
            <CalcList
              style={{
                borderBottom: "1px solid gray",
              }}>
              <DescDetail>목표 금액 달성시 예상 수령액</DescDetail>
              <RedCalc>0원</RedCalc>
            </CalcList>
            <CalcList>
              <CalcTitle>총 수수료</CalcTitle>
              <CalcResult>0원</CalcResult>
            </CalcList>
            <CalcList>
              <CalcTitle>결제대행 수수료(총 결제액의 3% + VAT)</CalcTitle>
              <CalcResult>0원</CalcResult>
            </CalcList>
            <CalcList>
              <CalcTitle>Basic 요금제 수수료(총 결제 금액의 5% + VAT)</CalcTitle>
              <CalcResult>0원</CalcResult>
            </CalcList>
          </GrayBox>
        </DescColumn>
      </Column>

      <Column>
        <DescL>
          <ColTitle>펀딩일정<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
          <ColDescription>설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지 날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.</ColDescription>
        </DescL>
        <DescR>
          <TimeLine>
          <li>
            <TLContent>시작일</TLContent>
            <input
              name="startDate"
              onChange={changeInput}
              value={plan.startDate} 
              type="date" 
              placeholder="시작 날짜를 선택해주세요"></input>
          </li>

          <li>
            <TLContent>종료일</TLContent>
            <input 
              name="endDate"
              onChange={changeInput}
              value={plan.endDate} 
              type="date" 
              placeholder="시작 날짜를 선택해주세요"></input>
          </li>
          </TimeLine>


        </DescR>
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
`

const PlanningForm = styled.div`
  /* background-color: rgb(240, 240, 240); */
  width: 1080px;
  margin: auto;
  margin-top: var(--pad3);
`

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
const InputSummary = styled.textarea`
  border: 1px solid gray;
  height: 50px;
  padding: var(--pad2);
  width: 610px;
  font-size: var(--font3);
  caret-color: var(--color1);
  resize: none;
  &:focus {
  outline: 0;
`
const AlertMsg = styled.div`
  color : var(--color1);
  font-size: var(--font1);
`

const DescColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 610px;
`

const DescL = styled.div`
  width: 350px;
`

const DescR = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 5px 0px gray;
  border-radius: 5px;
  width: 610px;
  margin-bottom: var(--pad1);
  margin-top: var(--pad1);
  padding: var(--pad2);
`

const DescTitle = styled.div`
  font-weight: bold;
  font-size: var(--font1);
  padding-bottom: var(--pad1);
`
const DescDetail = styled.div`
  width: 210px;
  font-size: var(--font1);
`
const DesImg = styled.img`
  width: 300px;
  background-size: cover;

`

const rota = keyframes`
  0%{ transform:rotate(0);};
  100%{ transform:rotate(180deg);};
`
const CategorySelect = styled.select`
  padding: var(--pad1);
  border-color: rgb(200,200,200);
  /* appearance: none; */
  background:url(..img/arrowDown.svg);
  /* &:focus {
    rotate: calc(180deg);
    transition: 1s;
  }
  & > p {
    rotate: calc(-180deg);
    transition: 1s;
  } */
`
const SelectArrow = styled.div`
  
`
// select{
//   position: relative;
//   width: 100%;
//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
// }
// .container {
//     position: relative;
//     width: 70px;
// }
// .container:after {
// content: "";
// position: absolute;
// right: 8px;
// top: 12px;
// width: 5px;
// height: 5px;
// border-top: 2px solid skyblue;
// border-left: 2px solid skyblue;
// pointer-events: none;
// transform: translateY(-50%) rotate(-135deg);
// }

const WarnMsg = styled.div`
  background-color: var(--color2);
  color: var(--color1);
  padding: var(--pad2);
  margin-top: var(--pad2);
`
const GrayBox = styled.div`
  background-color: rgb(240, 240, 240) ;
  padding: var(--pad2);
`
const RedCalc = styled.div`
  color: var(--color1);
  font-size: var(--font4);
  font-weight: bold;
`

const verLine = styled.div`
  position: absolute;
  left:0.2em;
  top:0;
  width:2px;/*線の太さ*/
  height:100px;/*はじめは高さを0に*/
  background: #ccc;
  content:'';
`
const CalcList = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: var(--pad1);
`

const CalcTitle = styled.div`
  color: gray;
  font-size: var(--font1);
`

const CalcResult = styled.div`
  font-size: var(--font1);
`

const InputMoney = styled(NumericFormat)`
  text-align: right;
  border:1px solid var(--color1);
  padding: var(--pad2);
  margin-bottom: var(--pad2);
  width: 580px;
  font-size: var(--font3);
  caret-color: var(--color1);
  &:focus {
  outline: 0;
  }
`
const InfoLi = styled.li`
  font-size: var(--font1);
  color: gray;
  margin: var(--pad1);
`
const TimeLine = styled.ul`
  list-style: none;
  & > li{
    transform: scale(1.0);
  }
  & > li::after{
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    height: 100%;
    border-left: 1px solid black;
  }
`
const TLContent = styled.div`
  margin: 1rem;
  font-weight:bold;
  font-size: var(--font2);
  color: black;

`


// .timeline {
//   list-style: none;
//   }
//   .timeline li {
//   margin-bottom: 30px;
//   }div
  
//   .timeline-content {
//   margin-top: 1rem;
//   }
  
//   ul.timeline {
//   background-color: #fffef6;
//   border:dashed 1px #e5e5d1;
//   }
  
//   .timeline span.midashi{
//   font-weight:500;
//   font-size:120%;
//   color: #fdc44f;
//   }
  
//   ul.timeline li::before {
//   font-family: “Font Awesome 5 Free”;
//   content: “\f111”;
//   transform: scale(1.0);
//   font-weight: bold;
//   color: #fdc44f;
//   font-size:80%;
//   }