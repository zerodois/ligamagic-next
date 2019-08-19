import React from 'react';
import App from 'next/app';
import Header from '../components/header';

class Application extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default Application;
