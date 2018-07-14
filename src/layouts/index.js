import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from "react-helmet";

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import ProjectList from "../components/projectList";
// import meta from '../../public/static/images/meta.JPG';
import favicon from '../../public/static/images/faviconcon.png';

const Layout = ({ data }) => {
  return (
    <div className="home">
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} />
        <meta property="title" content="HANJUNG:FE DEVELOPER"/>
        <meta property="og:title" content="HANJUNG:FE DEVELOPER"/>
        <meta property="og:url" content="https://jung-han.github.io/"/>
        <meta property="og:description" content="portfolio" />
        <title>HANJUNG:FE DEVELOPER</title>
      </Helmet>
      <Header title={data.site.siteMetadata.title}/>
      <ProjectList />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
