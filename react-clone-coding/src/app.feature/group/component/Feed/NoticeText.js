import React from "react";
import styled from "styled-components";


const NoticeText = () => {
  return(
    <StyledWrapper>
      <StyledTitle>전체공지입니다</StyledTitle>
      <StyledText>텍스트 크기 14 /  텍스트 크기 18 / 텍스트 크기 36 www.naver.com / cashwalk.io / ABCDEFGHIJKLMN </StyledText>
    </StyledWrapper>
  );
}

export default NoticeText;

const StyledWrapper = styled.div`
  width: 90%;
  padding-left: 1em;
  padding-right: 1em;
`;

const StyledTitle = styled.strong`
  font-weight: bold;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledText = styled.div`
  margin-top: 0.6em;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
`;