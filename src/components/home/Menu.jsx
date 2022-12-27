import React from "react";

import all from "../../img/icons/all.svg"

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
  }
  const lists =[]
  Object.keys(category).forEach(key => {
    lists.push(<div><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</div>)
  });
  return (
    <div>
      <img src={all}/>
      menu
      {lists}
    </div>
  )
}
export default Menu;