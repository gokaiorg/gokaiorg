import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
// import Gallery from 'components/gallery';
// import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>

      {/*<Modal>*/}
      {/*  <iframe*/}
      {/*    title="Google Map"*/}
      {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1170782553304!2d98.36585821510056!3d7.882817594320979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3050319a730d6bd7%3A0xd5b0869e6d63db14!2sNaka%20Condo!5e0!3m2!1sfr!2sth!4v1590934830363!5m2!1sfr!2sth"*/}
      {/*    width="1200"*/}
      {/*    height="600"*/}
      {/*    frameBorder="0"*/}
      {/*  />*/}
      {/*</Modal>*/}
    </Box>
    {/*<Gallery items={data.homeJson.gallery} />*/}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  background: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      background {
        childImageSharp {
          fluid(maxHeight: 2500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
