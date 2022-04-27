import { NextPage } from 'next';
import styled from 'styled-components';

const NoticeText = (props) => {
  return (
    <StyledWrapper>
      <h1>{props.title}</h1>
      <span>{props.text}</span>
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
