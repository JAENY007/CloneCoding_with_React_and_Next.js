import React from "react";
import styled from "styled-components";
import AccountInfo from "./AccountInfo";
import ImportantMesseage from "./ImportantMessage";
import NoticeText from "./NoticeText";
import ShortenInfo from "./ShortenInfo";

const NoticeCard = (props) => {
  return(
    <StyledWrapper>
      <StyledImageBox><StyledImage src={props.ImageSrc} /></StyledImageBox>
      <StyledInfo>
        <AccountInfo/>
        <ShortenInfo />
      </StyledInfo>
      <NoticeText />
      <ImportantMesseage />
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

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;