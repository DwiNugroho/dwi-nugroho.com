import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <section style={{ marginBottom: '100px' }}>
      <main>{children}</main>
    </section>
    <Footer />
  </>
);

export default Layout;
