import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FilterBar = () => {
  return (
      <StyledTitleBox>
        <StyledTitle>전체보기</StyledTitle>
        <StyledButtonImg><StyledFontAwesome icon={faFilter} />&nbsp;필터</StyledButtonImg>
      </StyledTitleBox>
  );
};

export default FilterBar;


const StyledTitleBox = styled.div`
  width: 680px;
  line-height: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  display: grid;
  grid-template-columns: repeat(2, 612px 68px);
`;

const StyledTitle = styled.span`
  color: #969696;
  font-weight: bold;
`;

const StyledButtonImg = styled.button`
  width: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  background: none;
  color: #969696;
  font-size: 16px;
  font-weight: bold;
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: #c2c2c2;
`;