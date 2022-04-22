import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const MiniCardRecommend = (props) => {
  return(
    <StyledLink to={"/"}>
      <StyledWrapper>
        <StyledImage src={props.ImageSrc}/>
        <StyledTitle>
          <StyledTitleText>{props.Title}</StyledTitleText>
        </StyledTitle>
          <StyledSubTitle>{props.SubTitle}</StyledSubTitle>
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