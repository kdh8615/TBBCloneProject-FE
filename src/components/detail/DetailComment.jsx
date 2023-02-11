import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  __delComments,
  __getComments,
  __postComments,
} from "../../redux/modules/commentSlice";
import DetailUpdate from "./DetailUpdate";

const DetailComment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comments.comment);
  console.log("1", commentList);
  const [writeComment, setWriteComment] = useState({
    detailId: parseInt(id),
    contents: "",
  });

  useEffect(() => {
    dispatch(__getComments(id));
  }, [dispatch]);

  const onChangeWriteComment = (e) => {
    const { name, value } = e.target;
    setWriteComment({ ...writeComment, [name]: value });
  };

  const onClickWriteComment = async () => {
    if (writeComment.contents === "") {
      alert("댓글을 입력해 주세요!");
    } else {
      await dispatch(__postComments(writeComment));
      dispatch(__getComments(id));
      setWriteComment({ ...writeComment, contents: "" });
    }
  };

  return (
    <div>
      <CommentWrite>
        <input
          type="text"
          name="contents"
          onChange={onChangeWriteComment}
          value={writeComment.contents}
        ></input>
        <button onClick={() => onClickWriteComment(writeComment)}>
          댓글작성
        </button>
      </CommentWrite>
      <CommentView>
        {commentList &&
          commentList?.map((List) => (
            <DetailUpdate
              key={List.id}
              id={List.commentId}
              commentId={List.commentId}
              contents={List.contents}
              nickname={List.nickname}
              detailId={id}
              createdAt={List.createdAt}
            />
          ))}
      </CommentView>
    </div>
  );
};

export default DetailComment;

const CommentWrite = styled.div`
  display: flex;
  width: 680px;
  margin-top: 30px;
  input {
    width: 72%;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.03);
    padding-left: 10px;
    border-radius: 5px;
  }
  button {
    margin-left: 30px;
    width: 70px;
    height: 55px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: transparent;
    border-radius: 5px;
    :hover {
      border: 1px solid black;
    }
  }
`;

const CommentView = styled.div`
  margin-top: 30px;
  width: 600px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid white;
  border-bottom: 0.5px solid black; */
`;

// const CommentLine = styled.div`
//   display: flex;
// `;

// const CommentFirstLine = styled.div`
//   width: 500px;
//   display: flex;
//   margin: 20px 0;
//   div {
//     margin-right: 10px;
//   }
// `;

// const CommentSecondLine = styled.div`
//   width: 200px;
//   margin: 10px 0;
//   gap: 10px;
//   display: flex;
//   justify-content: right;
//   button {
//     width: 50px;
//     height: 25px;
//     background-color: transparent;
//     border: 0.5px solid rgba(0, 0, 0, 0.2);
//     :hover {
//       border: 1px solid black;
//     }
//   }
// `;

// const CommentDay = styled.div`
//   font-size: 12px;
//   margin: 10px 0;
// `;
