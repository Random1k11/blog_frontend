import React from 'react';
import Head from 'next/head';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

class BaseLayout extends React.Component {

  render() {
    return (
        <div className="App">
            <Head>
                <title>Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Home - Dmitry Rusanov" />
                <meta property="og:description" content="Dmitry Rusanov personal blog about programming and other thing" />
            </Head>
            <Navigation />
            {this.props.children}
            <Footer />
        </div>
    )
  }
}

export default BaseLayout