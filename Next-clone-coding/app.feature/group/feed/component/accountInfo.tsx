import { NextPage } from 'next';
import styled from 'styled-components';

const AccountInfo = () => {
  return (
    <StyledWrapper>
      <img src="https://cashwalk.com/img/kr/cashwalk-symbol-20-color.png" />
      <span>CASHWALK</span>
    </StyledWrapper>
  );
};

export default AccountInfo;

const StyledWrapper = styled.div`
  padding: 10px;
  line-height: 30px;
  padding-left: 10px;
  display: inline-block;

  img {
    width: 35px;
    padding: 5px;
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
