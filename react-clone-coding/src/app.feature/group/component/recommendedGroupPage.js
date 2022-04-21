import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MiniCardRecommend from "./miniCardRecommend";

const RecommendedGroupPage = () => {

  const CardLocation = () => {
    let result;
    for (let i = 1; i < 12; i ++) {
      result += <MiniCardRecommend />
    }
    return result;
  }

  return(
    <StyledGroupBox>
      <StyledTitle>
      <StyledTitleText>추천그룹</StyledTitleText>
      </StyledTitle>
      <StyledContainer>
        <MiniCardRecommend/>
        <MiniCardRecommend/>
        <MiniCardRecommend/>
        <MiniCardRecommend/>
      </StyledContainer>
    </StyledGroupBox>
  );
}

export default RecommendedGroupPage;

const StyledGroupBox = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
`;

const StyledTitle = styled.div`
  width: 700px;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledTitleText = styled.strong`
  font-size : 20px;
`;

const StyledContainer = styled.div`
  width: 680px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 340px 340px);
  overflow: hidden;
`;

