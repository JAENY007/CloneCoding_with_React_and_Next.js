import { NextPage } from 'next';
import styled from 'styled-components';

const AccountInfo = (props) => {
  return (
    <StyledWrapper>
      <img src={props.accountImageSrc} />
      <span>{props.userId}</span>
    </StyledWrapper>
  );
};

export default AccountInfo;

const StyledWrapper = styled.div`
  padding: 10px;
  line-height: 30px;
  padding-left: 20px;
  display: inline-block;

  img {
    width: 35px;
    padding: 0;
    background: #ffc430;
    border: none;
    border-radius: 20px;
    vertical-align: middle;
  }
  span {
    margin: 0 0 0 10px;
    color: black;
    font-weight: 400px;
  }
`;
