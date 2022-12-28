import React, { useRef,useState } from "react";
import styled, { keyframes } from "styled-components";

import '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor.css'

import { VscQuestion } from 'react-icons/vsc';
import { VscInfo } from 'react-icons/vsc';

import { FaStarOfLife } from 'react-icons/fa'

import titleImg from "../img/planning/title_img.png"
import uploadImg from "../img/planning/upload_img.png"
import summaryImg from "../img/planning/summary_img.png"

import SelectCategory from "../components/planning/SelectCategory";
import TitleForm from "../components/planning/TitleForm";
import SummaryForm from "../components/planning/SummaryForm";
import PlanEditor from "../components/planning/PlanEditor";
import MoneyForm from "../components/planning/MoneyForm";
import DateForm from "../components/planning/DateForm";
import ImageForm from "../components/planning/ImageForm";
import { useDispatch , useSelector} from "react-redux";
import { __addPlan } from "../redux/modules/planSlice";

function Planning() {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const { plan } = useSelector(state => state.plan);
  const changeUploadFile = async (event) => {
    const { name, files } = event.target;
		setImages([...images, ...files]);
  };

	const handleOnRemoveImage = (index) => {
		const newImages = [...images];
		newImages.splice(index, 1);
		setImages(newImages);
	};

  const createHandler = () =>{
    dispatch(__addPlan(plan))
  }

  return (
    <PlanningForm>
      <PlanHeaderTop>
        <HeadBtn onClick={createHandler}>기획하기</HeadBtn>
      </PlanHeaderTop>
      <Column>
        <DescL>
          <ColTitle>프로젝트 카테고리<FaStarOfLife size={"10px"} color="var(--color1)"/></ColTitle>
          <ColDescription>프로젝트 성격과 가장 일치하는 카테고리를 선택해주세요.<br></br>
            적합하지 않을 경우 운영자에 의해 조정될 수 있습니다.</ColDescription>
        </DescL>
        <div>
          <SelectCategory />
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

          <TitleForm />

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
          <SummaryForm />
        </ColDetail>
      </Column>

      <Column>
        <DescL>
          <ColTitle>프로젝트 대표 이미지<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
          <ColDescription>후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있도록 이미지 가이드라인을 따라 주세요.</ColDescription>
        </DescL>
        <ColDetail>
          <div><VscQuestion color="var(--color1)" /></div>
          <ImgProd src={uploadImg} alt="" />
            <ImageForm />
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
          <MoneyForm />
        </DescColumn>
      </Column>

      <Column>
        <DescL>
          <ColTitle>펀딩일정<FaStarOfLife size={"10px"} color="var(--color1)" /></ColTitle>
          <ColDescription>
            설정한 일시가 되면 펀딩이 자동 시작됩니다. <br></br>
            펀딩 시작 전까지 날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.
          </ColDescription>
        </DescL>
        <DescR>
          <DateForm />
        </DescR>
      </Column>
    </PlanningForm>
  )
}
export default Planning;


const PlanHeaderTop = styled.div`
  height: 100px;
  position: relative;
  width: 100%;
  top: 0;
  background-color: white;
  position: sticky;
`
// const PlanHeadermiddle = styled.div`
//   height: 50px;
//   background-color: white;
// `

const HeadBtn = styled.button`
  width: 150px;
  height: 50px;
  border: none;
`

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
  line-height: 1.5;
`

const ColDetail = styled.div`
  width:630px;
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
  }
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
const ImgProd = styled.img`
  width: 550px;
  background-size: cover;

`


const WarnMsg = styled.div`
  background-color: var(--color2);
  color: var(--color1);
  padding: var(--pad2);
  margin-top: var(--pad2);
`
const InfoLi = styled.li`
  font-size: var(--font1);
  color: gray;
  margin: var(--pad1);
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