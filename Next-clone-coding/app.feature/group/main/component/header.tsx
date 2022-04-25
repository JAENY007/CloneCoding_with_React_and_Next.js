import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <StyledWrapper>
      <Link href={'#'} passHref>
        <i>
          <FontAwesomeIcon icon={faArrowLeft} />
        </i>
      </Link>
      <span>그룹</span>
      <Link href={'#'} passHref>
        <i>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </i>
      </Link>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  width: 100%;
  line-height: 2em;
  color: #5e5050;
  background: #ffd200;
  font-size: large;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;

  a,
  i {
    text-decoration: none;
    margin: auto 1em auto 1em;
  }
`;
