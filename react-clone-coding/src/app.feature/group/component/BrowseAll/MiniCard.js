import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MiniCard = () => {

  const ImageSrc = [
    "http://placeimg.com/300/300/animals",
    "http://placeimg.com/300/300/architecture",
    "http://placeimg.com/300/300/nature",
    "http://placeimg.com/300/300/people",
    "http://placeimg.com/300/300/tech"
  ];

  const Title = [
    "QA_리워드형그룹_그룹_가나다라마바사",
    "QA_리워드형그룹_그룹_ABCDEFGHIJ",
    "QA_리워드형그룹_그룹_IIIIIIIVVVI",
    "QA_리워드형그룹_그룹_ONETWOTHREE",
    "QA_리워드형그룹_그룹_아야어여오요우유",
    "QA_리워드형그룹_그룹_하나둘셋넷다섯여"
  ];

  const SubTitle = [
    "0명 참여중",
    "1명 참여중",
    "10명 참여중",
    "100명 참여중",
    "1000명 참여중",
    "너무 많이 참여중"
  ];

  const randomValueFromArray = (array) => {
    const random = Math.floor(Math.random() * Array.length);
    return array[random];
  }

  let ImageForCard = randomValueFromArray(ImageSrc);
  let TitleText = randomValueFromArray(Title);
  let SubTitleText = randomValueFromArray(SubTitle);

  return(
    <StyledLink to={"/"}>
      <StyledWrapper>
        <StyledImage src={ImageForCard}/>
        <StyledTitle>
          <StyledTitleText>{TitleText}</StyledTitleText>
        </StyledTitle>
          <StyledSubTitle>{SubTitleText}</StyledSubTitle>
      </StyledWrapper>
    </StyledLink>
  );
}

export default MiniCard;

const StyledImage = styled.img`
  width: 10em;
  border-radius: 10px;
  border: none;
`;

const StyledWrapper = styled.div`
  width: 10em;
  height: 15em;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
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
  margin-top: 0.5em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;