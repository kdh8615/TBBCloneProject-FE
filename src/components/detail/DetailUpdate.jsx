import React, { useState } from "react";
import styled from "styled-components";
import { VscAccount } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import {
  __putComments,
  __getComments,
  __delComments,
} from "../../redux/modules/commentSlice";
import { useParams } from "react-router-dom";

const DetailUpdate = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [detailUpdate, setDetailUpdate] = useState(false);
  const [contentUpdate, setContentUpdate] = useState({
    id: props.id,
    detailId: parseInt(id),
    nickname: props.nickname,
    contents: props.contents,
  });
  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setContentUpdate({ ...contentUpdate, [name]: value });
  };

  const onClickUpdateComment = async () => {
    await dispatch(__putComments(contentUpdate));
    dispatch(__getComments(id));
    setDetailUpdate(false);
  };

  const onClickDeleteComment = async (obj) => {
    await dispatch(__delComments(obj));
    dispatch(__getComments(id));
  };
  // console.log("contentU", props.id);

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
            <button
              onClick={() =>
                onClickDeleteComment({ id: props.id, detailId: props.detailId })
              }
            >
              삭제
            </button>
          </CommentSecondLine>
        </CommentLine>
        <div>{props.contents}</div>
        <CommentDay>{props?.createdAt?.split("T", 1)}</CommentDay>
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
            <button
              onClick={() => onClickUpdateComment(props.id)}
              style={{ width: "80px" }}
            >
              수정완료
            </button>
          </CommentSecondLine>
        </CommentLine>
        <UpdateInput type="text" name="contents" onChange={onChangeUpdate} />
        <CommentDay>{props?.createdAt?.split("T", 1)}</CommentDay>
      </CommentToT>
    );
  }
};

export default DetailUpdate;

const CommentToT = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const UpdateInput = styled.input`
  width: 300px;
  height: 25px;
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
