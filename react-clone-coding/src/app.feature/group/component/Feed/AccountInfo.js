import React from "react";
import styled from "styled-components";


const AccountInfo = () => {
  return(
    <StyledIdBox>
      <StyledIcon src="https://cashwalk.com/img/kr/cashwalk-symbol-20-color.png" />
      <StyledIdText>CASHWALK</StyledIdText>
    </StyledIdBox>
  )
}

export default AccountInfo;

const StyledIdBox = styled.div`
  width: 70%;
  line-height: 3em;
  padding-left: 1em;
  display: inline-block;
`;

const StyledIcon = styled.img`
  width: 1.8em;
  padding: 0.5em;
  background: #ffc430;
  border: none;
  border-radius: 2em;
  vertical-align: middle;
`;

const StyledIdText = styled.span`
  margin-left: 0.6em;
  color: black;
  font-weight: 400;
`;