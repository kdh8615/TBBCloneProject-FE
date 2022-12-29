import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail, __detailDelete } from "../../redux/modules/detailSlice";
import { useParams } from "react-router-dom";
import DetailMoney from "./DetailMoney";
import { categoryList } from "../feature/categoryList";

const DetailTop = () => {
  // 슬라이더 기본 셋팅
  const settings = {
    dots: true, // 슬라이더 밑에 점 보이게
    Infinity: true, // 무한으로 반복
    speed: 500,
    slidersToShow: 1, // 1장씩 보이게
    slidesToScroll: 1, // 1장씩 뒤로
    centerPadding: "0px",
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch, id]);

  const detailView = useSelector((state) => state.details.detail);

  const moveRef = useRef();

  const onClickSupportMove = () => {
    moveRef.current.focus(<DetailMoney />);
  };

  // const startDay = detailView?.startDate?.split("T", 1)[0];
  // const endDay = detailView?.endDate?.split("T", 1)[0];

  // const DayMinus = Number(
  //   startDay?.replace(/\-/g, "") - endDay?.replace(/\-/g, "")
  // );

  const onClickDetailDelete = () => {
    dispatch(__detailDelete(id));
  };

  // console.log(category[`${detailView?.category}`]); 카테고리 값 불러오기
  return (
    <DetailTopTotal>
      <UpDiv>
        <DIVTOP>
          <DetailCategory>{categoryList[`${detailView?.category}`]}</DetailCategory>
        </DIVTOP>
        <DelUpBtn>
          <button>수정</button>
          <button onClick={() => onClickDetailDelete(id)}>삭제</button>
        </DelUpBtn>
      </UpDiv>

      <DetailTitle>{detailView?.title}</DetailTitle>
      <DetailBox>
        <StyleSlider {...settings}>
          <SliderImg src="http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg"></SliderImg>
          <SliderImg src="http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg"></SliderImg>
          <SliderImg src="http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg"></SliderImg>
          <SliderImg src="http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg"></SliderImg>
          <SliderImg src="http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg"></SliderImg>
        </StyleSlider>
        <DetailRight>
          <div style={{ fontSize: "15px" }}>모인금액</div>
          <DetailTopLine1>
            <DetailTopIn>{detailView?.totalSupport}</DetailTopIn>
            <Won>원</Won>
            <WonPersent>
              {(Number(detailView?.totalSupport) /
                Number(detailView?.goalPrice)) *
                100}
              %
            </WonPersent>
          </DetailTopLine1>
          <SubTitle>남은시간</SubTitle>
          <DetailTopLine1>
            <DetailTopIn>일수</DetailTopIn>
            <Won>일</Won>
          </DetailTopLine1>
          <SubTitle>후원자</SubTitle>
          <DetailTopLine1>
            <DetailTopIn>{detailView?.supporterCount}</DetailTopIn>
            <Won>명</Won>
          </DetailTopLine1>
          <DetailHr />
          <div>
            <RightDownView>
              <h5>목표금액</h5>
              <div>{detailView?.goalPrice}원</div>
            </RightDownView>
            <RightDownView>
              <h5>펀딩기간</h5>
              <div>
                {detailView?.startDate?.split("T", 1)} ~
                {detailView?.endDate?.split("T", 1)}
              </div>
              <h6>일남음</h6>
            </RightDownView>
          </div>
          <BottomButtonTotal>
            <BottomButton1>
              <AiOutlineHeart />
              {detailView?.projectLike}
            </BottomButton1>
            <BottomButton1>
              <BsShare />
            </BottomButton1>
            <BottomButton2 onClick={() => onClickSupportMove}>
              <h2>이 프로젝트 후원하기</h2>
            </BottomButton2>
          </BottomButtonTotal>
        </DetailRight>
      </DetailBox>
    </DetailTopTotal>
  );
};

export default DetailTop;

const StyleSlider = styled(Slider)`
  .slick-list {
    //얘로 크기조정 했음
    max-width: 600px;
    min-height: 450px;
    margin: 0 auto -4px;
  }

  .slick-prev:before,
  .slick-next:before {
    //얘는 양옆 버튼. 커스텀 해줘야 보임
    font-family: "slick";
    font-size: 25px;
    line-height: 1;
    opacity: 1;
    color: #aaaaaa;
    -webkit-font-smoothing: antialiased;
  }
`;

const DIVTOP = styled.div`
  width: 650px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const UpDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  button {
    width: 60px;
    height: 32px;
    margin-top: 70px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    :hover {
      border: 1px solid black;
    }
  }
`;

const DelUpBtn = styled.div`
  width: 470px;
  display: flex;
  justify-content: right;
  gap: 20px;
`;

const DetailHr = styled.hr`
  width: 350px;
  border: 0.5px solid #e6e6e6;
  margin-bottom: 20px;
`;
const BottomButtonTotal = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 5px;
`;
const BottomButton1 = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 13px;
`;

const BottomButton2 = styled.button`
  width: 250px;
  background-color: rgb(250, 100, 98);
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  :hover {
    background-color: rgb(249, 74, 71);
  }
`;
const RightDownView = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  height: 30px;
  h5 {
    margin-right: 20px;
  }
  h6 {
    width: 50px;
    height: 20px;
    margin-left: 10px;
    border: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 87, 87);
    background-color: rgb(253, 244, 243);
  }
`;

const SubTitle = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;

const Won = styled.div`
  margin: 10px;
  font-size: 15px;
`;

const WonPersent = styled.h3`
  margin: 10px 0;
`;

const SliderImg = styled.img`
  width: 600px;
  height: 445px;
`;

const DetailTopTotal = styled.div`
  width: 80%;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailCategory = styled.h3`
  font-size: 13px;
  width: 100px;
  height: 30px;
  border: 1px solid rgb(239, 239, 239);
  background-color: rgb(250, 250, 250);
  color: rgb(117, 117, 117);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const DetailTitle = styled.h1`
  font-size: 44px;
  margin: 16px auto 50px;
`;

const DetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const DetailRight = styled.div`
  width: 26%;
  margin: 5px auto;
`;

const DetailTopIn = styled.div`
  margin: 10px 0;
  font-size: 38px;
`;

const DetailTopLine1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
