import * as React from 'react';

import Seo from '@molecules/seo';

import Navbar from '@organisms/navbar';
import Footer from '@organisms/footer';
import MobileNav from '@organisms/mobile-navigation';

export interface Props {
  /**
   *  A Layout must have title atrribute
   */
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'website' | 'article';
}

export const Main: React.FC<Props> = ({
  title,
  description,
  image,
  children,
  className,
  type,
  ...props
}) => {
  return (
    <section className={`width--100 ${className}`} {...props}>
      <Seo
        title={title || ''}
        description={description || ''}
        image={image || ''}
        type={type}
      />
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
