import { NextPage } from 'next';
import styled from 'styled-components';
import Header from '../component/header';
import NavigationBar from '../component/navigationBar';
import ScreenBrowseAllPage from '../../browseAll/screen/screenBrowseAllPage';
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
