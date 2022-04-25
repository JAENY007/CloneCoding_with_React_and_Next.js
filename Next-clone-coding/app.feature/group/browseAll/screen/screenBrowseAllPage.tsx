import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import SearchBar from '../component/searchBar';

const ScreenBrowseAllPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/screenBrowseAllPage');
  });

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default ScreenBrowseAllPage;
