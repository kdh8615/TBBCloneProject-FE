import React from "react";
import styled from "styled-components";

function Menu() {
  const category = {
    all: "전체",
    boardGame: "보드게임",
    digitalGame: "디지털 게임",
    webtoonCartoon: "웹툰 만화",
    webtoonResource: "웹툰 리소스",
    designWord: "디자인 문구",
    characterGood: "캐릭터 굿즈",
    homeLiving: "홈 리빙",
    techElectronic: "테크 가전",
    myPet: "반려 동물",
    food: "푸드",
    perfumeBeauty: "향수 뷰티",
    clothes: "의류",
    thing: "잡화",
    jewel: "주얼리",
    publising: "출판",
    design: "디자인",
    art: "예술",
    picture: "사진",
    music: "음악",
    movie: "영화 비디오",
    show: "공연"
  };
  const lists1 = [];
  const lists2 = [];
  const lists3 = [];
  const lists4 = [];
  const lists5 = [];
  Object.keys(category).forEach((key, i) => {
    if (i < 5) lists1.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>)
    else if (i < 10) lists2.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>)
    else if (i < 15) lists3.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>)
    else if (i < 20) lists4.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>)
    else lists5.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>)
  });
  return (
    <MenuBar>
      <ListBox>
        <CategoryList>{lists1}</CategoryList>
        <CategoryList>{lists2}</CategoryList>
        <CategoryList>{lists3}</CategoryList>
        <CategoryList>{lists4}</CategoryList>
        <CategoryList>{lists5}</CategoryList>
      </ListBox>
    </MenuBar>
  )
}
export default Menu;

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  /* position: absolute; */
  width: 100%;
  /* height: 300px; */
  background-color: white;
`

const ListBox = styled.div`
  margin: auto;
  display: flex;
`
const CategoryList = styled.div`
  display: flex;
  width: 230px;
  flex-direction: column;
`

const ListEl = styled.div`
  display: flex;
  /* justify-content: center; */
  text-align: center;
  line-height:40px;
  font-size: var(--font2);
`