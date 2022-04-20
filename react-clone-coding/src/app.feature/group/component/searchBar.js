import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
      <InputBox placeholder="총 11개의 그룹이 개설되어 있습니다."></InputBox>
  );
};

export default SearchBar;

const InputBox = styled.input`
  width: 680px;
  line-height: 40px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  text-align: center;
  display: block;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  text-align: left;

  ::placeholder {
    color: #c2c2c2;
  }
`;
