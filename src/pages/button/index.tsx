import * as React from 'react';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';

import PostCard from '@/components/molecules/post-card';

export default () => {
  return (
    <section className="width--100 mt-5">
      <section className="container">
        <Input className="mr-3" />
        <Button appearance="primary" color="blue">
          Button
        </Button>
        <br />
        <br />
        <br />
        <br />
        <section className="width--100 flex">
          <section className="width--100 mx-3">
            <PostCard title="I'm a web developer specializing in JavaScript language. I build things with code, make digital products to improve how humans living their life." />
          </section>
          <section className="width--100 mx-3">
            <PostCard title="I'm a web developer specializing in JavaScript language. I build things with code, make digital products to improve how humans living their life." />
          </section>
          {/* <section className="width--100 mx-3">
            <PostCard />
          </section> */}
        </section>
      </section>
    </section>
  );
};
