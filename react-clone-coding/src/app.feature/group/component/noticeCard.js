import React from "react";
import styled from "styled-components";
import CardImage from "./cardImage";

const NoticeCard = () => {
  return(
    <StyledWrapper>
      <StyledImageBox><CardImage /></StyledImageBox>
      <StyledInfo>
      </StyledInfo>
    </StyledWrapper>
  );
}

export default NoticeCard;

const StyledWrapper = styled.div`
  width: 100%;
  height: 32em;
  margin-left: auto;
  margin-right: auto;
`;

const StyledImageBox = styled.div`
  display: flex;
  overflow: scroll;
`;

const StyledInfo = styled.div`
  width: 100%;
  height: 10em;
  margin-top: 1em;
`;