import * as React from 'react';
import { Link } from 'gatsby';

import Template from '@templates/main';
import Button from '@atoms/button';
import PostCard from '@molecules/post-card';
import Img from '@atoms/img';

import './style.scss';

export default () => {
  return (
    <Template>
      <section className="width--100 background--spring-wood">
        <section className="container">
          <section className="flex flex--align-center py-5">
            <section className="width--100">
              <h1>Dwi Nugroho</h1>
              <p>
                I'm a web developer specializing in JavaScript language. I build
                things with code, make digital products to improve how humans
                living their life. I always interested in making a better user
                experience for the products I build. Furthermore, it's really
                fun for me to learn something new and I do love to work in a
                team.
              </p>
            </section>
            <section className="width--100 flex flex--justify-end">
              <section
                style={{ width: '300px', height: '300px', maxWidth: '300px' }}
              >
                <Img
                  src="dwi-nugroho.jpeg"
                  cover
                  style={{ borderRadius: '4px' }}
                />
              </section>
            </section>
          </section>
        </section>
      </section>
      <br />
      <br />
      <br />
      <section className="container">
        <section className="flex flex--align-center flex--justify-space-between mb-3">
          <h2 className="mb-0">Popular Articles.</h2>
          <Link to="">
            <Button color="blue">View all</Button>
          </Link>
        </section>
        <hr />

        <section className="popular-articles flex flex--wrap width--100">
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <section key={index} className="popular-articles__item">
              <PostCard
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                thumbnail="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9ae6c367979383.5d37877e92943.png"
                description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
              />
            </section>
          ))}
        </section>
      </section>
    </Template>
  );
};
