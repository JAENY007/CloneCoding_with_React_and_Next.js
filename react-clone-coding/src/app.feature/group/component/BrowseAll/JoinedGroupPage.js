import React,{ Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MiniCard from "./MiniCard";

const JoinedGroupPage = () => {


  const Random = [
    {
      id: 1,
      imageSrc: "http://placeimg.com/300/300/animals",
      title: "QA_리워드형그룹_그룹_가나다라마바사",
      subTitle: "0명 참여중"
    },
    {
      id: 2,
      imageSrc: "http://placeimg.com/300/300/architecture",
      title: "QA__가나다라마바사__리워드_NEED",
      subTitle: "1명 참여중"
    },
    {
      id: 3,
      imageSrc: "http://placeimg.com/300/300/nature",
      title: "QA_ABCDEFG_IIIIIIIVVVIVII",
      subTitle: "3명 참여중"
    },
    {
      id: 4,
      imageSrc: "http://placeimg.com/300/300/people",
      title: "QA_123456789_안녕하세요",
      subTitle: "5명 참여중"
    },
    {
      id: 5,
      imageSrc: "http://placeimg.com/300/300/tech",
      title: "QA_리워드형그룹_그룹_가나다라마바사",
      subTitle: "6명 참여중"
    },
    {
      id: 6,
      imageSrc: "http://placeimg.com/300/300/any",
      title: "QA__가나다라마바사__리워드_NEED",
      subTitle: "7명 참여중"
    },
    {
      id: 7,
      imageSrc: "http://placeimg.com/300/300/animals",
      title: "QA_ABCDEFG_IIIIIIIVVVIVII",
      subTitle: "9명 참여중"
    },
    {
      id: 8,
      imageSrc: "http://placeimg.com/300/300/architecture",
      title: "QA_123456789_안녕하세요",
      subTitle: "10명 참여중"
    },
    {
      id: 9,
      imageSrc: "http://placeimg.com/300/300/nature",
      title: "QA_리워드형그룹_그룹_가나다라마바사",
      subTitle: "100명 참여중"
    },
    {
      id: 10,
      imageSrc: "http://placeimg.com/300/300/people",
      title: "QA__가나다라마바사__리워드_NEED",
      subTitle: "1,000명 참여중"
    },
    {
      id: 11,
      imageSrc: "http://placeimg.com/300/300/tech",
      title: "QA_ABCDEFG_IIIIIIIVVVIVII",
      subTitle: "1,000,000명 참여중"
    }
  ];

  return(
    <StyledGroupBox>
      <StyledTitle>
      <StyledTitleText>내가 가입한 그룹</StyledTitleText>
      <StyledLink to={"/"}>더보기</StyledLink>
      </StyledTitle>
      <StyledContainer>
        <MiniCard
        ImageSrc={Random[0].imageSrc}
        Title={Random[0].title}
        SubTitle={Random[0].subTitle} />
        <MiniCard
        ImageSrc={Random[1].imageSrc}
        Title={Random[1].title}
        SubTitle={Random[1].subTitle} />
        <MiniCard
        ImageSrc={Random[2].imageSrc}
        Title={Random[2].title}
        SubTitle={Random[2].subTitle} />
        <MiniCard
        ImageSrc={Random[3].imageSrc}
        Title={Random[3].title}
        SubTitle={Random[3].subTitle} />
        <MiniCard
        ImageSrc={Random[4].imageSrc}
        Title={Random[4].title}
        SubTitle={Random[4].subTitle} />
        <MiniCard
        ImageSrc={Random[5].imageSrc}
        Title={Random[5].title}
        SubTitle={Random[5].subTitle} />
        <MiniCard
        ImageSrc={Random[6].imageSrc}
        Title={Random[6].title}
        SubTitle={Random[6].subTitle} />
        <MiniCard
        ImageSrc={Random[7].imageSrc}
        Title={Random[7].title}
        SubTitle={Random[7].subTitle} />
        <MiniCard
        ImageSrc={Random[8].imageSrc}
        Title={Random[8].title}
        SubTitle={Random[8].subTitle} />
        <MiniCard
        ImageSrc={Random[9].imageSrc}
        Title={Random[9].title}
        SubTitle={Random[9].subTitle} />
        <MiniCard
        ImageSrc={Random[10].imageSrc}
        Title={Random[10].title}
        SubTitle={Random[10].subTitle} />
      </StyledContainer>
    </StyledGroupBox>
  );
}

export default JoinedGroupPage;

const StyledGroupBox = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f2f2f2;
`;

const StyledTitle = styled.div`
  width: 90%;
  line-height: 20px;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0.8em;
  margin-right: 0.8em;
  display: flex;
  justify-content: space-between;
`;

const StyledTitleText = styled.strong`
  font-size : 20px;
`;

const StyledLink = styled(Link)`
  color: #c2c2c2;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
`;

const StyledContainer = styled.div`
  overflow: scroll;
  display: flex;
`;