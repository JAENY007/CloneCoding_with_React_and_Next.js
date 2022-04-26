import { NextPage } from 'next';
import styled from 'styled-components';

const ShortenInfo = () => {
  return (
    <StyledWrapper>
      <span className="InfoIcon">공지</span>
      <span className="CreatedDate">1일 전</span>
    </StyledWrapper>
  );
};

export default ShortenInfo;

const StyledWrapper = styled.div`
  font-size: 12px;
  text-align: center;
  display: inline;
  float: right;
  padding: 0 20px 0 0;
  .InfoIcon {
    width: 35px;
    line-height: 20px;
    display: inline-block;
    background: #ff3352;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 0 2px 0 2px;
  }
  .CreatedDate {
    display: inline-block;
    color: #c2c2c2;
    font-weight: bold;
    border-radius: 2px;
    margin: 0 0 0 5px;
  }
`;
