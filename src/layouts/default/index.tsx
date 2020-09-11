import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <section className="container" style={{ minHeight: '65vh' }}>
      <main>{children}</main>
    </section>
    <Footer />
  </>
);

export default Layout;
