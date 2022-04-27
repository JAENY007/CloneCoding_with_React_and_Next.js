import { NextPage } from 'next';
import styled, { css } from 'styled-components';

const ShortenInfo = (props) => {
  return (
    <StyledWrapper>
      <span className="info-icon">{props.subject}</span>
      {/* <span className={props.subject === "공지" ? : "info-icon"}>{props.subject}</span> */}
      <span className="created-date">{props.createdDate}일 전</span>
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
  .info-icon {
    width: 35px;
    line-height: 20px;
    display: inline-block;
    background: #ff3352;
    /* background: ${'공지' ? '#ff3352' : '#007840'}; */
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 0 2px 0 2px;
  }
  .created-date {
    display: inline-block;
    color: #c2c2c2;
    font-weight: bold;
    border-radius: 2px;
    margin: 0 0 0 5px;
  }
`;
