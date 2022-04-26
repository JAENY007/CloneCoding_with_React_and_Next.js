import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Card from './card';
import MiniCard from './miniCard';

const groupPage = (props) => {
  const printCard = () => {
    if (props.title === '내가 가입한 그룹') {
      return (
        <div className="flex-nowrap">
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
      );
    } else {
      return (
        <div className="flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      );
    }
  };

  return (
    <StyledWrapper>
      <header>
        <h1>{props.title}</h1>
        {props.title === '내가 가입한 그룹' ? (
          <Link href="/joinedgroup">더보기</Link>
        ) : null}
      </header>
      {printCard()}
    </StyledWrapper>
  );
};

export default groupPage;

const StyledWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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

  .flex-nowrap {
    display: flex;
    overflow: scroll;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-left: 10px;
  }

  .flex-wrap {
    display: flex;
    overflow: scroll;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
