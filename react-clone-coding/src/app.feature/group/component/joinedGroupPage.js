import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MiniCard from "./miniCard";

const JoinedGroupPage = () => {

  const CardLocation = () => {
    let result;
    for (let i = 1; i < 12; i ++) {
      result += <MiniCard />
    }
    return result;
  }

  return(
    <StyledGroupBox>
      <StyledTitle>
      <StyledTitleText>내가 가입한 그룹</StyledTitleText>
      <StyledLink to={"/"}>더보기</StyledLink>
      </StyledTitle>
      <StyledContainer>
        <MiniCard/><MiniCard/><MiniCard/><MiniCard/><MiniCard/><MiniCard/><MiniCard/><MiniCard/>
      </StyledContainer>
    </StyledGroupBox>
  );
}

export default JoinedGroupPage;

const StyledGroupBox = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c2c2c2;
`;

const StyledTitle = styled.div`
  width: 680px;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: grid;
  grid-template-columns: repeat(2, 612px 68px);
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