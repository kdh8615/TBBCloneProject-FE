import React, { useState } from "react";
import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { __putComments } from "../../redux/modules/commentSlice";

const DetailUpdate = (props) => {
  const dispatch = useDispatch();
  const [detailUpdate, setDetailUpdate] = useState(false);
  const [contentUpdate, setContentUpdate] = useState({
    id: props.id,
    detailId: props.detailId,
    nickname: props.nickname,
    contents: props.contents,
  });
  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setContentUpdate({ ...contentUpdate, [name]: value });
  };

  const onClickUpdateComment = () => {
    dispatch(__putComments(contentUpdate));
    setDetailUpdate(false);
  };

  if (detailUpdate === false) {
    return (
      <CommentToT key={props.id}>
        <CommentLine>
          <CommentFirstLine>
            <div>
              <VscAccount />
            </div>
            <div>{props.nickname}</div>
          </CommentFirstLine>
          <CommentSecondLine>
            <button onClick={() => setDetailUpdate(true)}>수정</button>
            <button onClick={() => props.del(props.id)}>삭제</button>
          </CommentSecondLine>
        </CommentLine>
        <div>{props.contents}</div>
        <CommentDay>2022-12-26</CommentDay>
      </CommentToT>
    );
  } else {
    return (
      <CommentToT key={props.id}>
        <CommentLine>
          <CommentFirstLine>
            <div>
              <VscAccount />
            </div>
            <div>{props.nickname}</div>
          </CommentFirstLine>
          <CommentSecondLine>
            <button onClick={() => onClickUpdateComment(props.id)}>
              수정완료
            </button>
          </CommentSecondLine>
        </CommentLine>
        <input type="text" name="contents" onChange={onChangeUpdate}></input>
        <CommentDay>2022-12-26</CommentDay>
      </CommentToT>
    );
  }
};

export default DetailUpdate;

const CommentToT = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const CommentLine = styled.div`
  display: flex;
`;

const CommentFirstLine = styled.div`
  width: 500px;
  display: flex;
  margin: 20px 0;
  div {
    margin-right: 10px;
  }
`;

const CommentSecondLine = styled.div`
  width: 200px;
  margin: 20px 0;
  gap: 10px;
  display: flex;
  justify-content: right;
  button {
    width: 50px;
    height: 25px;
    background-color: transparent;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    :hover {
      border: 1px solid black;
    }
  }
`;

const CommentDay = styled.div`
  font-size: 12px;
  margin: 10px 0;
`;
