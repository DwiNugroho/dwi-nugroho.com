import * as React from 'react';

import colors from '@/api/colors';

import './style.scss';

export default () => {
  return (
    <section className="width--100 mt-5">
      <section className="container">
        {colors.map((item, index) => (
          <section key={index} className="width--100 mb-4">
            <h3>{item.title}</h3>
            <section className="colors flex flex--align-start flex--wrap">
              {item.list.map((data, order) => (
                <section
                  key={order}
                  className={`colors__item background--${data.color} p-3`}
                >
                  <p className={`text--${data.textColor} mb-0 text--center`}>
                    {data.color}
                  </p>
                </section>
              ))}
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};
