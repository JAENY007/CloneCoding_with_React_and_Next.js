import React from "react";
import styled from "styled-components";
import CardImage from "./cardImage";

const NoticeCard = () => {
  return(
    <StyledWrapper>
      <StyledImageBox><CardImage /></StyledImageBox>
    </StyledWrapper>
  );
}

export default NoticeCard;

const StyledWrapper = styled.div`
  width: 720px;
  height: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledImageBox = styled.div`
  display: flex;
  overflow: scroll;
`;