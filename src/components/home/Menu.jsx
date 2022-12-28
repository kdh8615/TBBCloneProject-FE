import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { category } from "../feature/category";

function Menu() {
  const { cate }= useSelector(state => state.contents)
  console.log(cate)
  const lists1 = [];
  const lists2 = [];
  const lists3 = [];
  const lists4 = [];
  const lists5 = [];

  // const filitering = () =>{
    
  // }

  Object.keys(category).forEach((key, i) => {
    switch(true){
      case i < 5:
        lists1.push(<ListEl
          ><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>);
        break;
      case i < 10 :
        lists2.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>);
        break;
      case i < 15 :
        lists3.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>)
        break;
      case i < 20 :
        lists4.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>);
        break;
      default :
        lists5.push(<ListEl><img src={require(`../../img/icons/${key}.svg`)} />{category[key]}</ListEl>)
        break;
    }
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