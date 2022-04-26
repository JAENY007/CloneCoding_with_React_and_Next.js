import { NextPage } from 'next';
import styled from 'styled-components';
import SearchBar from '../component/searchBar';
import GroupPage from '../component/groupPage';

const ScreenBrowseAllPage = () => {
  const GroupClassification = [
    { id: 1, title: '내가 가입한 그룹' },
    { id: 2, title: '추천 그룹' },
  ];

  return (
    <div>
      <SearchBar />
      <GroupPage title={GroupClassification[0].title} />
      <GroupPage title={GroupClassification[1].title} />
    </div>
  );
};

export default ScreenBrowseAllPage;
