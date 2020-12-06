import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

import Img from 'gatsby-image';

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Img
      fluid={
        data.homeJson.background
          ? data.homeJson.background.childImageSharp.fluid
          : {}
      }
      alt={data.homeJson.title}
      className={data.homeJson.class}
    />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  background: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        homeJson {
          title
          class
          background {
            childImageSharp {
              fluid(maxHeight: 2500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
