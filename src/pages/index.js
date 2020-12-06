import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
// import Gallery from 'components/gallery';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <h3>{data.homeJson.donate}</h3>
      <Modal>
        <h4>gokai.argent.xyz (Recommended)</h4>
        <p>0x41646Fb881Acd56bad144B343A3525B6907Bc86b</p>
        <h4>gokai.eth</h4>
        <p>0x71dFf12E24Db711b99a64a8A1d904cd256A49e58</p>
      </Modal>
    </Box>
    {/*<Gallery items={data.homeJson.gallery} />*/}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      donate
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
