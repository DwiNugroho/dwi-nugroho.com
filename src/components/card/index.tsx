import React from 'react';

import Img from 'gatsby-image';
import Tag from '@/components/tag';

import './style.scss';

interface PropTypes {
  // eslint-disable-next-line
  cover?: any;
  category?: string;
  title: string;
  description?: string;
  date?: string;
  tag?: Array<string>;
}

const Card: React.FC<PropTypes> = ({
  cover,
  category,
  title,
  description,
  date,
  tag,
}) => (
  <section className="card">
    <section className="card__cover">
      {cover && <Img className="card__image" fluid={cover} alt={title} />}
    </section>
    <p className="card__category uppercase">{category}</p>
    <h4 className="card__title">{title}</h4>
    <p className="card__description">{description}</p>
    <p className="card__date">{date}</p>
    <section className="card__tag">
      {tag &&
        tag.map((item, index) => (
          <Tag key={index} color="blue">
            {item}
          </Tag>
        ))}
    </section>
  </section>
);

export default Card;
