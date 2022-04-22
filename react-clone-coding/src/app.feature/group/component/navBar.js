import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNavigation>
      <StyledTabMenu>
        <StyledMenu to={"/BrowseAllPage"}>모아보기</StyledMenu>
        <StyledMenu to={"/Feed"}>피드</StyledMenu>
      </StyledTabMenu>
    </StyledNavigation>
  );
};

export default NavBar;

const StyledTabMenu = styled.ul`
  height: auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledNavigation = styled.nav`
  width: 100%;
  line-height: 50px;
  background: white;
  margin-left: auto;
  margin-right: auto;
`;

const StyledMenu = styled(Link)`
  width: 100%;
  color: #c2c2c2;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  border-bottom: 1px solid #f2f2f2;

  &:focus  {
    border-bottom: 3px solid #5c2e2b;
  }
`;