import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const FooterButton = () => {
  return(
    <StyledWrapper>
      <StyledButton><StyledLink to={"#"}>새로고침</StyledLink></StyledButton>
    </StyledWrapper>
  );
}

export default FooterButton;

const StyledWrapper = styled.div`
  width: 720px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 80px;
  height: 30px;
  background: #70c8ff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;