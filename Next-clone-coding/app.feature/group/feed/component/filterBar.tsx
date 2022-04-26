import { NextPage } from 'next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const FilterBar = () => {
  return (
    <StyledWrapper>
      <h1>전체보기</h1>
      <button>
        <i>
          <FontAwesomeIcon icon={faFilter} />
        </i>
        &nbsp;필터
      </button>
    </StyledWrapper>
  );
};

export default FilterBar;

const StyledWrapper = styled.div`
  width: 100%;
  line-height: 30px;
  display: flex;
  justify-content: space-between;

  h1 {
    color: #969696;
    margin: 10px 0 10px 20px;
    font-size: 16px;
  }

  button {
    width: 60px;
    height: 30px;
    margin: 10px 20px 10px 0;
    padding: 4px 0 4px 0;
    text-align: center;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    background: white;
    color: #969696;
    font-size: 14px;
    font-weight: 500;
    i {
      line-height: 16px;
      color: #c2c2c2;
    }
  }
`;
