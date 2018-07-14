import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import ProjectList from "../components/projectList";

const Layout = ({ data }) => {
  return (
    <div className="home">
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
