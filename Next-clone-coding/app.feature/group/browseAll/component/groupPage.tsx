import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Card from './card';
import __testCardParameter from '../../../../app.modules/__tests__/__testCardParameter';

const groupPage = (props) => {
  const CardSize = [
    { id: 1, size: '50px' },
    { id: 2, size: '70px' },
  ];
  return (
    <StyledWrapper>
      <header>
        <h1>{props.title}</h1>
        {props.title === '내가 가입한 그룹' ? (
          <Link href="/joinedgroup">더보기</Link>
        ) : null}
      </header>
      <div>{props.title === '내가 가입한 그룹' ? null : <Card />}</div>
    </StyledWrapper>
  );
};

export default groupPage;

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto 0 auto;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #f2f2f2;

  header {
    width: 100%;
    padding: 0 20px 0 20px;
    line-height: 50px;
    font-weight: bold;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h1 {
      margin: 0;
      font-size: 18px;
      text-align: left;
    }
    a {
      color: #c2c2c2;
      font-size: 14px;
      text-decoration: none;
      text-align: right;
    }
  }

  div {
    margin: 10px;
  }
`;
