import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <StyledWrapper>
      <Link href="/" passHref>
        <div>
          <img src="http://placeimg.com/300/300/animals" />
          <h1>좋은그룹_어서참여부탁드립니다</h1>
          <pre>여러명 참여중</pre>
        </div>
      </Link>
    </StyledWrapper>
    // <StyledWrapper>
    //   <Link href={props.link} passHref>
    //     <Image src={props.imageSrc} />
    //     <h1>{props.title}</h1>
    //     <pre>{props.number}명 참여중</pre>
    //   </Link>
    // </StyledWrapper>
  );
};

export default Card;

const StyledWrapper = styled.div`
  width: 180px;
  height: 240px;
  text-decoration: none;
  margin-bottom: 20px;
  div {
    flex-wrap: wrap;
    img {
      width: 180px;
      height: 180px;
      border-radius: 10px;
    }
    h1 {
      margin: 10px 0 2px 0;
      font-weight: 500;
      font-size: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    pre {
      margin: 0;
      font-size: 14px;
      color: #c2c2c2;
    }
  }
`;
