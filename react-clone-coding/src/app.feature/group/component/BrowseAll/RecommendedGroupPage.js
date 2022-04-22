import React, { Component } from "react";
import styled from "styled-components";
import MiniCardRecommend from "./MiniCardRecommend";

const RecommendedGroupPage = () => {

  const Random = [
    {
      id: 1,
      imageSrc: "http://placeimg.com/320/320/animals",
      title: "QA_리워드형그룹_그룹_가나다라마바사",
      subTitle: "0명 참여중"
    },
    {
      id: 2,
      imageSrc: "http://placeimg.com/320/320/architecture",
      title: "QA__가나다라마바사__리워드_NEED",
      subTitle: "10명 참여중"
    },
    {
      id: 3,
      imageSrc: "http://placeimg.com/320/320/nature",
      title: "QA_ABCDEFG_IIIIIIIVVVIVII",
      subTitle: "32명 참여중"
    },
    {
      id: 4,
      imageSrc: "http://placeimg.com/320/320/people",
      title: "QA_123456789_안녕하세요",
      subTitle: "5명 참여중"
    }
  ];

  return(
    <StyledGroupBox>
      <StyledTitle>
      <StyledTitleText>추천 그룹</StyledTitleText>
      </StyledTitle>
      <StyledContainer>
        <MiniCardRecommend
        ImageSrc={Random[0].imageSrc}
        Title={Random[0].title}
        SubTitle={Random[0].subTitle} />
        <MiniCardRecommend
        ImageSrc={Random[1].imageSrc}
        Title={Random[1].title}
        SubTitle={Random[1].subTitle} />
        <MiniCardRecommend
        ImageSrc={Random[2].imageSrc}
        Title={Random[2].title}
        SubTitle={Random[2].subTitle} />
        <MiniCardRecommend
        ImageSrc={Random[3].imageSrc}
        Title={Random[3].title}
        SubTitle={Random[3].subTitle} />
      </StyledContainer>
    </StyledGroupBox>
  );
}

export default RecommendedGroupPage;

const StyledGroupBox = styled.div`
  width: 100%;
`;

const StyledTitle = styled.div`
  width: 90%;
  line-height: 20px;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1.3em;
  margin-right: 1.3em;
`;

const StyledTitleText = styled.strong`
  font-size : 20px;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: scroll;
`;

