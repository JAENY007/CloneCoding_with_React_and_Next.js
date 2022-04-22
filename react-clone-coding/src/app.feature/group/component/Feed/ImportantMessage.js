import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";


const ImportantMesseage = () => {
  return(
    <StyledWrapper>
      <StyledIcon icon={faCircleExclamation} />
      <StyledText>좋아요, 댓글은 각 그룹 피드 화면에서 확인 가능합니다.</StyledText>
    </StyledWrapper>
  );
}

export default ImportantMesseage;

const StyledWrapper = styled.div`
  width: 90%;
  margin-top: 1.5em;
  padding: 1em;
  font-size: 0.8em;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.3em;
  color: #c2c2c2;
`;

const StyledText = styled.span`
  color: #c2c2c2;
  font-weight: bold;
`;