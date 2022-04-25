import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from '../app.feature/group/main/component/provider';
import ScreenMain from '../app.feature/group/main/screen/ScreenMain';
import ScreenBrowseAllPage from '../app.feature/group/browseAll/screen/screenBrowseAllPage';
import ScreenFeed from '../app.feature/group/feed/screen/screenFeed';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <ScreenMain />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
