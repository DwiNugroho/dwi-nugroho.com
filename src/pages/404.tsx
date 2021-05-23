import * as React from 'react';

import Template from '@templates/main';

export default () => {
  return (
    <Template title="404 Page Not Found">
      <br />
      <br />
      <br />
      <section className="width--100 text--center mt-5 container">
        <h1>404</h1>
        <p>We can't seem to find the page you are looking for</p>
      </section>
    </Template>
  );
};
