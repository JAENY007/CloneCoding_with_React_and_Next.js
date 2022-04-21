import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MiniCardRecommend = () => {

  return(
    <StyledLink to={"/"}>
      <StyledWrapper>
        <StyledImage src="http://placeimg.com/330/330/any"/>
        <StyledTitle>
          <StyledTitleText>QA_리워드형그룹_그룹_리워드형그룹이ㅏㅇㄴ랑ㄴ라ㅣㅓ</StyledTitleText>
        </StyledTitle>
          <StyledSubTitle>6명 참여중</StyledSubTitle>
      </StyledWrapper>
    </StyledLink>
  );
}

export default MiniCardRecommend;

const StyledImage = styled.img`
  border-radius: 10px;
  border: none;
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledTitle = styled.div`
  width: 330px;
  height: 25px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledTitleText = styled.strong`
  color: black;
  font-size : 20px;
  font-weight: 500;
`;

const StyledSubTitle = styled.p`
  color: #c2c2c2;
  font-size : 16px;
  font-weight: 500;
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;