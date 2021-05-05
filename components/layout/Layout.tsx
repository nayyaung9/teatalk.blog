import React from 'react'
import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
