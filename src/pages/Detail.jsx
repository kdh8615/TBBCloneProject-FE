import React, { useState } from "react";
import styled from "styled-components";
import DetailComment from "../components/detail/DetailComment";
import DetailMiddle from "../components/detail/DetailMiddle";
import DetailMoney from "../components/detail/DetailMoney";
import DetailTop from "../components/detail/DetailTop";
import DetailView from "../components/detail/DetailView";

function Detail() {
  const [test, setTest] = useState(false);
  if (test === false) {
    return (
      <div>
        <DetailTop />
        <DetailMiddle test={test} setTest={setTest} />
        <DetailBottomView>
          <DetailView />
          <DetailMoney />
        </DetailBottomView>
      </div>
    );
  } else {
    return (
      <div>
        <DetailTop />
        <DetailMiddle test={test} setTest={setTest} />
        <DetailBottomView>
          <DetailComment />
          <DetailMoney />
        </DetailBottomView>
      </div>
    );
  }
}

export default Detail;

const DetailBottomView = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* position: sticky;
  top: 30; */
`;
