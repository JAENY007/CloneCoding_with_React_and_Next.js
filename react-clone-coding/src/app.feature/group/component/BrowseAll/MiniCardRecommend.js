import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ImageForCard = "http://placeimg.com/320/320/any";

const Title = {
  title : 'QA_리워드형그룹_그룹_리워드형그룹이ㅏㅇㄴ랑ㄴ라ㅣㅓ',
  subTitle : '6명 참여중'
};

const MiniCardRecommend = () => {
  return(
    <StyledLink to={"/"}>
      <StyledWrapper>
        <StyledImage src={ImageForCard}/>
        <StyledTitle>
          <StyledTitleText>{Title.title}</StyledTitleText>
        </StyledTitle>
          <StyledSubTitle>{Title.subTitle}</StyledSubTitle>
      </StyledWrapper>
    </StyledLink>
  );
}

export default MiniCardRecommend;

const StyledImage = styled.img`
  width: 12em;
  border-radius: 10px;
  border: none;
`;

const StyledWrapper = styled.div`
  width: 12em;
  height: 18em;
  overflow: hidden;
  margin-bottom: 0.2em;
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 1.6em;
  margin-top: 10px;
  white-space: nowrap;
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
  margin-top: 0.4em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;