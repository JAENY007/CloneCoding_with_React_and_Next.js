import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import BrowseAllPage from './browseAllPage';
import Feed from './feed';

const NavigationBar = () => {
  return (
    <StyledWrapper>
      <ul>
        <Link href={'#'}>모아보기</Link>
        <Link href={'#'}>피드</Link>
      </ul>
    </StyledWrapper>
  );
};

export default NavigationBar;

const StyledWrapper = styled.nav`
  background: white;

  ul {
    width: 100%;
    line-height: 3em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #c2c2c2;
    font-weight: 500;
    font-size: large;
    text-align: center;
  }

  ul a {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;

    &:focus {
      border-bottom: 3px solid #5c2e2b;
    }
  }
`;
