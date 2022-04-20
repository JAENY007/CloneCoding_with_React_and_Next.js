import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Navigation>
      <TabMenu>
        <Menu to={"/BrowseAllPage"}>모아보기</Menu>
        <Menu to={"/Feed"}>피드</Menu>
      </TabMenu>
    </Navigation>
  );
};

export default NavBar;

const TabMenu = styled.ul`
  height: auto;
  border-bottom: 1px solid #c2c2c2;
  display: grid;
  grid-template-columns: repeat(2, 360px 360px);
  text-align: center;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const Navigation = styled.nav`
  width: 720px;
  line-height: 50px;
  background: white;
  margin-left: auto;
  margin-right: auto;
`;

const Menu = styled(Link)`
  color: #c2c2c2;
  font-weight: bold;
  font-size: 18px;
`;