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
  tag?: Array<string>;
  path: string;
}

const Card: React.FC<CardTypes> = ({
  cover,
  category,
  title,
  description,
  date,
  tag,
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
