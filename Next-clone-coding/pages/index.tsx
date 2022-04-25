import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Reset } from 'styled-reset';
import Header from '../app.feature/group/component/header';
import NavBar from '../app.feature/group/component/navBar';
import Main from '../app.feature/group/main/screen/main';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="viewport"
          content="width=divice-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalabe=no"
        />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
