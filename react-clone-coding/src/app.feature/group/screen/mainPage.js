import React from "react";
import styled from "styled-components";
import NavBar from "../component/navBar";


const MainPage = (props) => 
  <PageBox>
    {props.children}
  </PageBox>;

export default MainPage;

const PageBox = styled.div`
  background: white;
`;
