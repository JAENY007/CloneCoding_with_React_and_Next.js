import React from "react";
import styled from "styled-components";
import AccountInfo from "./AccountInfo";
import CardImage from "./CardImage";
import NoticeText from "./NoticeText";
import ShortenInfo from "./ShortenInfo";

const NoticeCard = () => {
  return(
    <StyledWrapper>
      <StyledImageBox><CardImage /></StyledImageBox>
      <StyledInfo>
        <AccountInfo/>
        <ShortenInfo />
      </StyledInfo>
      <NoticeText />
    </StyledWrapper>
  );
}

export default NoticeCard;

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1em;
`;

const StyledImageBox = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
`;

const StyledInfo = styled.div`
  width: 100%;
  height: 4em;
  margin-top: 1em;
`;