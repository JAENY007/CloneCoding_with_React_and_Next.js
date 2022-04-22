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
  width: 100%;
  line-height: 4em;
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.span`
  font-size: 1.1em;
  color: #969696;
  font-weight: bold;
  margin-left: 1em;
`;

const StyledButtonImg = styled.button`
  width: 5em;
  height: 2em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
  text-align: center;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  background: none;
  color: #969696;
  font-size: 1em;
  font-weight: bold;
`;

const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: #c2c2c2;
`;