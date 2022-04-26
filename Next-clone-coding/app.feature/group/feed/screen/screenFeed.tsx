import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import FilterBar from '../component/filterBar';
import NoticeCard from '../component/noticeCard';

const ScreenFeed = () => {
  const ImageSrcAddress = [
    {
      id: 1,
      ImageSrcAddress: 'http://placeimg.com/720/540/tech',
    },
    {
      id: 2,
      ImageSrcAddress: 'http://placeimg.com/720/540/any',
    },
  ];
  return (
    <div>
      <FilterBar />
      <NoticeCard imageSrc={ImageSrcAddress[0].ImageSrcAddress} />
      <NoticeCard imageSrc={ImageSrcAddress[1].ImageSrcAddress} />
    </div>
  );
};

export default ScreenFeed;
