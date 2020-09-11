import React from 'react';
import Navbar from '../components/navbar';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <section className="container">
      <main>{children}</main>
    </section>
  </>
);

export default Layout;
