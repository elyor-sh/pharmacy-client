import App from 'next/app'
import React from 'react'
import { appWithTranslation } from 'next-i18next';
import StoreProvider from '../context';
import '../styles/globals.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <StoreProvider><Component {...pageProps} /></StoreProvider>
  }
}

export default appWithTranslation(MyApp)
