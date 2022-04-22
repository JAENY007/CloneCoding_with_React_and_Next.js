import React from "react";
import styled from "styled-components";
import MiniCardRecommend from "./MiniCardRecommend";

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
  width: 90%;
  line-height: 20px;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1.3em;
  margin-right: 1.3em;
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

