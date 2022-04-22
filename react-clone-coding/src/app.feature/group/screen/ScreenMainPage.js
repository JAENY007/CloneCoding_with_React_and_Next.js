import React from "react";
import styled from "styled-components";


const ScreenMainPage = (props) => 
  <StyledWrapper>
    {props.children}
  </StyledWrapper>;

export default ScreenMainPage;

const StyledWrapper = styled.div`
  background: white;
`;
