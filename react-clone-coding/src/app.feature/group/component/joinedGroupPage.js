import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MiniCard from "./miniCard";

const JoinedGroupPage = () => {
  
  const View = () => {
    let arrayCard = [];
    for (let i = 1; i < 12; i ++) {
      arrayCard.push(<MiniCard />)
    }
    return arrayCard;
  }

  return(
    <StyledGroupBox>
      <StyledTitle>
      <StyledTitleText>내가 가입한 그룹</StyledTitleText>
      <StyledLink to={"/"}>더보기</StyledLink>
      </StyledTitle>
      <StyledContainer>
        {View()}
      </StyledContainer>
    </StyledGroupBox>
  );
}

export default JoinedGroupPage;

const StyledGroupBox = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c2c2c2;
`;

const StyledTitle = styled.div`
  width: 90%;
  line-height: 20px;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0.8em;
  margin-right: 0.8em;
  display: flex;
  justify-content: space-between;
`;

const StyledTitleText = styled.strong`
  font-size : 20px;
`;

const StyledLink = styled(Link)`
  color: #c2c2c2;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
`;

const StyledContainer = styled.div`
  overflow: scroll;
  display: flex;
`;