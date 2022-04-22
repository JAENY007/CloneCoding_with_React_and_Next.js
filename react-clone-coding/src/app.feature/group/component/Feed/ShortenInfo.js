import React from "react";
import styled from "styled-components";

const ShortenInfo = () => {
  return(
    <StyledInfoBox>
      <StyledInfoIcon>공지</StyledInfoIcon>
      <StyledCreatedDate>1일 전</StyledCreatedDate>
    </StyledInfoBox>
  );
};

export default ShortenInfo;

const StyledInfoBox = styled.div`
  width: 30%;
  font-size: 0.8em;
  text-align: center;
  display: inline;
`;

const StyledInfoIcon = styled.span`
  width: 2em;
  line-height: 1.5em;
  display: inline-block;
  background: #ff3352;
  color: white;
  font-weight: bold;
  border-radius: 0.2em;
  padding-left: 0.3em;
  padding-right: 0.3em;
`;

const StyledCreatedDate = styled.span`
  display: inline-block;
  margin-left: 0.5em;
  color: #c2c2c2;
  font-weight: bold;
  border-radius: 0.2em;
`;