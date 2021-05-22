import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import './style.scss';

export interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * An img can have src attribute
   */
  src: string;
  /**
   * An img can have src attribute
   */
  alt?: string;
  /**
   *  An img can have className atrribute
   */
  className?: string;
  /**
   *  An img can have draggable atrribute
   */
  draggable?: boolean;
  /**
   *  An img can have contain atrribute
   */
  contain?: boolean;
  /**
   *  An img can have cover atrribute
   */
  cover?: boolean;
}

/**
 * Reusable Img Component
 */
export const Img: React.FC<Props> = ({
  className,
  src,
  alt,
  draggable,
  contain,
  cover,
  style,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = React.useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  const attr = cover ? 'atom-img--cover' : contain ? 'atom-img--contain' : '';

  if (!match)
    return (
      <img
        src={src}
        className={`atom-img ${className} ${attr}`}
        alt={alt}
        draggable={draggable}
        style={style}
        {...props}
      />
    );

  const { node } = match;

  const { childImageSharp, publicURL, extension } = node;

  if (extension === 'svg' || !childImageSharp) {
    return (
      <img
        src={publicURL}
        className={`atom-img ${className} ${attr}`}
        alt={alt}
        draggable={draggable}
        style={style}
        {...props}
      />
    );
  }

  return (
    <GatsbyImage
      fluid={childImageSharp.fluid}
      draggable={draggable}
      alt={alt}
      className={className}
      style={style}
    />
  );
};

Img.defaultProps = {
  alt: null,
  draggable: false,
};

export default Img;
