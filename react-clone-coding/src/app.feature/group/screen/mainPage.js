import React from "react";
import styled from "styled-components";
import NavBar from "../component/navBar";


const MainPage = (props) => 
  <StyledWrapper>
    {props.children}
  </StyledWrapper>;

export default MainPage;

const StyledWrapper = styled.div`
  background: white;
`;
