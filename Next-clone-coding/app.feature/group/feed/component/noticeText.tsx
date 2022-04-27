import { NextPage } from 'next';
import styled from 'styled-components';

const NoticeText = () => {
  return (
    <StyledWrapper>
      <h1>전체공지입니다</h1>
      <span>
        텍스트 크기 14 / 텍스트 크기 18 / cashwalk.io / notion.so / github.com /
        ABCDEFGHIJKLMNOP
      </span>
    </StyledWrapper>
  );
};

export default NoticeText;

const StyledWrapper = styled.div`
  padding: 0 10px 0 10px;
  h1 {
    font-size: 16px;
    font-weight: bold;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    margin: 5px 0 0 0;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
