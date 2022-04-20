import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <StyledWrapper>
      <Link to={"#"}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <span>그룹</span>
      <Link to={"#"}>
        <FontAwesomeIcon icon={faCircleQuestion} />
      </Link>
    </StyledWrapper>
  );
};

export default App;

const StyledWrapper = styled.div`
  width: 720px;
  line-height: 40px;
  margin-top: 0;
  color: #996633;
  font-weight: bold;
  background: #ffe602;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 60px 600px 60px);
`;
