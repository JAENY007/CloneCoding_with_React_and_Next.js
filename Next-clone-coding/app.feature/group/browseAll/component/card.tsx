import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Card = (props) => {
  return (
    <StyledWrapper>
      <Link href="/" passHref>
        <div></div>
        <img src="http://placeimg.com/300/300/animals" />
      </Link>
      <h1>좋은그룹_어서참여부탁드립니다</h1>
      <pre>여러명 참여중</pre>
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
  width: 40px;
  height: 100px;
  overflow: hidden;
  margin: 0 10px 0 10px;

  a {
    text-decoration: none;
    h1 {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

const StyledImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
