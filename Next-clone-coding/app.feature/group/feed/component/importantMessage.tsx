import { NextPage } from 'next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const ImportantMessage = () => {
  return (
    <StyledWrapper>
      <i>
        <FontAwesomeIcon icon={faCircleExclamation} />
      </i>
      <span>좋아요, 댓글은 각 그룹 피드 화면에서 확인 가능합니다.</span>
    </StyledWrapper>
  );
};

export default ImportantMessage;

const StyledWrapper = styled.div`
  width: 100%;
  margin: 15px 0 0 0;
  padding: 10px;
  font-size: 12px;
  color: #c2c2c2;

  i {
    margin: 0 4px 0 4px;
  }

  span {
    font-weight: 500;
  }
`;
