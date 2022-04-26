import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const MiniCard = (props) => {
  return (
    <Link href="/" passHref>
      <StyledWrapper>
        <img src="http://placeimg.com/300/300/tech" />
        <h1>참여부탁드립니다</h1>
        <pre>여러명 참여중</pre>
      </StyledWrapper>
    </Link>
    // <StyledWrapper>
    //   <Link href={props.link} passHref>
    //     <Image src={props.imageSrc} />
    //     <h1>{props.title}</h1>
    //     <pre>{props.number}명 참여중</pre>
    //   </Link>
    // </StyledWrapper>
  );
};

export default MiniCard;

const StyledWrapper = styled.div`
  width: 150px;
  height: 240px;
  text-decoration: none;
  margin: 0 5px 0 5px;
  padding: 10px 0 15px 0;
  flex-wrap: wrap;
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  h1 {
    margin: 5px 0 0 0;
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
`;
