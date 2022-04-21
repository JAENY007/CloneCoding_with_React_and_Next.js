import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <StyledWrapper>
      <StyledIcon to="/" ><FontAwesomeIcon icon={faArrowLeft} /></StyledIcon>
      <span>그룹</span>
      <StyledIcon to="/" ><FontAwesomeIcon icon={faCircleQuestion} /></StyledIcon>
    </StyledWrapper>
  );
};

export default Header;

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

const StyledIcon = styled(Link)`
  color: #996633;
  text-decoration: none;
`;
