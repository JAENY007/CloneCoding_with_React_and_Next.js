import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

const NavigationBar = () => {
  return (
    <StyledWrapper>
      <ul>
        <Link href="/screenbrowseallpage">모아보기</Link>
        <Link href="/screenfeed">피드</Link>
      </ul>
    </StyledWrapper>
  );
};

export default NavigationBar;

const StyledWrapper = styled.nav`
  background: white;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
    padding: 0;
  }

  ul a {
    line-height: 3em;
    background: none;
    color: #c2c2c2;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    border: none;
    border-bottom: 2px solid #ececec;

    &:focus {
      border-bottom: 3px solid #5c2e2b;
    }
  }
`;
