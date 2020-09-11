import React from 'react';

import SEO from '@/components/seo';
import Layout from '@/layouts/default';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
