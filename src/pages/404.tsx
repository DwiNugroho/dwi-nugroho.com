import React from 'react';

import SEO from '@/components/seo';
import Layout from '@/layouts/default';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="container" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '52px' }}>404</h1>
      <p>This was probably a mistake.</p>
    </section>
  </Layout>
);

export default NotFoundPage;
