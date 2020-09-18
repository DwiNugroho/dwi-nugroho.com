import React from 'react';

import Img, { FluidObject } from 'gatsby-image';
import Tag from '@/components/tag';

import './style.scss';

export interface CardTypes {
  cover?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  category?: string;
  title: string;
  description?: string;
  date?: string;
  tags?: Array<string>;
  path: string;
}

const Card: React.FC<CardTypes> = ({
  cover,
  category,
  title,
  description,
  date,
  tags,
}) => (
  <section className="card">
    <section className="card__cover">
      {cover && (
        <Img
          className="card__image"
          fluid={cover.childImageSharp.fluid}
          alt={title}
          draggable={false}
        />
      )}
    </section>
    <p className="card__category uppercase">{category}</p>
    <h3 className="card__title">{title}</h3>
    <p className="card__description">{description}</p>
    <p className="card__date">{date}</p>
    <section className="card__tag">
      {tags &&
        tags.map((item, index) => (
          <Tag key={index} color="blue">
            {item}
          </Tag>
        ))}
    </section>
  </section>
);

export default Card;
