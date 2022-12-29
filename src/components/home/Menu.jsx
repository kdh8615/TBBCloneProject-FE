import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCategory, __getcontents } from "../../redux/modules/contentsSlice";

import { categoryList } from "../feature/categoryList";

function Menu() {
  const { cate, filt }= useSelector(state => state.contents)
  const dispatch = useDispatch();
  console.log(cate)
  const lists1 = [];
  const lists2 = [];
  const lists3 = [];
  const lists4 = [];
  const lists5 = [];

  const filitering = async (key) =>{
    await dispatch(setCategory(key))
  }
  useEffect(()=>{
    dispatch(__getcontents({cate , filt}))
  },[dispatch, cate, filt])

  Object.keys(categoryList).forEach((key, i) => {
    switch(true){
      case i < 5:
        lists1.push(<ListEl 
          onClick={()=>{filitering(key)}}
          ><img src={require(`../../img/icons/${key}.svg`)} />{categoryList[key]}</ListEl>);
        break;
      case i < 10 :
        lists2.push(<ListEl
          onClick={()=>{filitering(key)}}
          ><img src={require(`../../img/icons/${key}.svg`)} />{categoryList[key]}</ListEl>);
        break;
      case i < 15 :
        lists3.push(<ListEl
          onClick={()=>{filitering(key)}}
          ><img src={require(`../../img/icons/${key}.svg`)} />{categoryList[key]}</ListEl>)
        break;
      case i < 20 :
        lists4.push(<ListEl
          onClick={()=>{filitering(key)}}
          ><img src={require(`../../img/icons/${key}.svg`)} />{categoryList[key]}</ListEl>);
        break;
      default :
        lists5.push(<ListEl
          onClick={()=>{filitering(key)}}
          ><img src={require(`../../img/icons/${key}.svg`)} />{categoryList[key]}</ListEl>)
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
  z-index: 10;
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
  font-weight: normal;
  cursor: pointer;
  &:hover{
    font-weight: bold;
  }
`