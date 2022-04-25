import { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <StyledWrapper>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={'총 11개의 그룹이 개설되어 있습니다.'}
      ></input>
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </StyledWrapper>
  );
};

export default SearchBar;

const StyledWrapper = styled.form`
  width: 90%;
  line-height: 40px;
  font-weight: bold;
  margin: 20px auto auto auto;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  display: block;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  display: flex;

  input {
    width: 100%;
    line-height: 40px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    display: block;
    border: none;
    text-align: left;

    &:focus {
      outline: none;
    }

    ::placeholder {
      color: #c2c2c2;
    }
  }

  button {
    text-align: center;
    font-size: 16px;
    border: none;
    background: none;
    color: #f2f2f2;
  }
`;
