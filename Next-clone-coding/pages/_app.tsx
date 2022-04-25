import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from '../app.feature/group/main/component/provider';
import ScreenMain from '../app.feature/group/main/screen/ScreenMain';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <ScreenMain />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
