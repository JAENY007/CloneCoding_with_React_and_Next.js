import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
      <StyledInputBox>
        <StyledInput placeholder="총 11개의 그룹이 개설되어 있습니다."></StyledInput>
        <StyledButtonImg><FontAwesomeIcon icon={faMagnifyingGlass} /></StyledButtonImg>
      </StyledInputBox>
  );
};

export default SearchBar;

const StyledInputBox = styled.form`
  width: 680px;
  line-height: 40px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  display: block;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 612px 68px);
`;

const StyledInput = styled.input`
  width: 100%;
  line-height: 40px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  display: block;
  border: none;
  text-align: left;

  &:focus{
    outline: none;
  }

  ::placeholder {
    color: #c2c2c2;
  }
`;

const StyledButtonImg = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: 10px;
  text-align: center;
  border: none;
  background: none;
  color: #c2c2c2;
`;