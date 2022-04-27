import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import FilterBar from '../component/filterBar';
import NoticeCard from '../component/noticeCard';
import __testNoticeCardParameter from '../../../../app.modules/__tests__/__testNoticeCardParameter';

const ScreenFeed = () => {
  return (
    <div>
      <FilterBar />
      {__testNoticeCardParameter.map((item, itemIdx) => {
        return <NoticeCard {...item} />;
      })}
    </div>
  );
};

export default ScreenFeed;
