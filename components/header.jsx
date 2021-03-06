import Head from 'next/head';
import '../sass/main.scss';

const Header = () => {
  return (
    <Head>
      <title>Magic Next</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="/static/icomoon.css" rel="stylesheet" />
      <link href="/static/animate.min.css" rel="stylesheet" />
    </Head>
  );
};

export default Header;
