import * as React from 'react';

import Seo from '@molecules/seo';

import Navbar from '@organisms/navbar';
import Footer from '@organisms/footer';
import MobileNav from '@organisms/mobile-navigation';

import './style.scss';

export interface Props {
  /**
   *  A Layout must have title atrribute
   */
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const Main: React.FC<Props> = ({
  title,
  description,
  children,
  className,
  ...props
}) => {
  return (
    <section className={`width--100 ${className}`} {...props}>
      <Seo title={title || ''} description={description || ''} />
      <Navbar />
      <main style={{ minHeight: '74vh', marginTop: '84px' }}>{children}</main>
      <Footer />
      <br />
      <br />
      <section className="width--100 component--mobile-visible">
        <MobileNav />
      </section>
    </section>
  );
};

Main.defaultProps = {
  // path: '',
};

export default Main;
