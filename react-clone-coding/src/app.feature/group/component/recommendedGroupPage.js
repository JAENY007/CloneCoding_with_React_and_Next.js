import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MiniCardRecommend from "./miniCardRecommend";

const RecommendedGroupPage = () => {

  const View = () => {
    let arrayCard = [];
    for (let i = 1; i < 5; i ++) {
      arrayCard.push(<MiniCardRecommend />)
    }
    return arrayCard;
  }

  return(
    <StyledGroupBox>
      <StyledTitle>
      <StyledTitleText>추천 그룹</StyledTitleText>
      </StyledTitle>
      <StyledContainer>
        {View()}
      </StyledContainer>
    </StyledGroupBox>
  );
}

export default RecommendedGroupPage;

const StyledGroupBox = styled.div`
  width: 100%;
`;

const StyledTitle = styled.div`
  width: 100%;
  line-height: 20px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  padding-left: 1.5em;
`;

const StyledTitleText = styled.strong`
  font-size : 20px;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: scroll;
`;

