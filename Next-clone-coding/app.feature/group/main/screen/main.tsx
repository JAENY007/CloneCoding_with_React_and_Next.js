import { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../../component/header';
import NavigationBar from '../../component/navigationBar';
import { useRouter } from 'next/router';

const Main = () => {
  const Router = useRouter;

  return (
    <StyledWrapper>
      <Header />
      <NavigationBar />
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.div``;
