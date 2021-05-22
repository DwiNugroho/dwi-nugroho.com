import * as React from 'react';

import Navbar from '@organisms/navbar';
import Footer from '@organisms/footer';

import './style.scss';

export interface Props {
  /**
   *  A Navbar must have title atrribute
   */
  children: React.ReactNode;
  className?: string;
}

export const Main: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <section className={`width--100 ${className}`} {...props}>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>{children}</main>
      <Footer />
      <br />
      <br />
    </section>
  );
};

Main.defaultProps = {
  // path: '',
};

export default Main;
