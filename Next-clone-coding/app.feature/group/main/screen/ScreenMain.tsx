import { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../component/header';
import NavigationBar from '../component/navigationBar';
import screenbrowseallpage from '../../browseAll/screen/screenbrowseallpage';
import { productionBrowserSourceMaps } from '../../../../next.config';

const ScreenMain = (props) => {
  return (
    <div>
      <Header />
      <NavigationBar />
      {props.children}
    </div>
  );
};

export default ScreenMain;
