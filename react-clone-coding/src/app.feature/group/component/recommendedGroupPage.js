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
        <StyledLocation/><StyledLocation/><StyledLocation/><StyledLocation/><StyledLocation/>
      </StyledContainer>
    </StyledGroupBox>
  );
}

export default RecommendedGroupPage;

const StyledGroupBox = styled.div`
  width: 720px;
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

const StyledLink = styled(Link)`
  color: #c2c2c2;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const StyledContainer = styled.div`
  width: 720px;
  overflow: scroll;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const StyledLocation = styled(MiniCardRecommend)`
  float: left;
`