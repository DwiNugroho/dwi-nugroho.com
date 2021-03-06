import * as React from 'react';
import { Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';

// Atoms
import Tag from '@atoms/tag';

export interface Props {
  /**
   *  A PostCard must have title atrribute
   */
  title: string;
  /**
   *  A PostCard can have description atrribute
   */
  description?: string;
  /**
   *  A PostCard can have thumbnail atrribute
   */
  thumbnail?: FluidObject;
  /**
   *  A PostCard can have tags atrribute
   */
  tags?: string[];
  /**
   *  A PostCard can have path atrribute
   */
  path?: string;
  /**
   *  A PostCard can have className atrribute
   */
  className?: string;
  /**
   *  A PostCard can have className atrribute
   */
  info?: string;
}

export const PostCard: React.FC<Props> = ({
  description,
  title,
  thumbnail,
  tags,
  path,
  className,
  info,
  ...props
}) => {
  const [isClient, setClient] = React.useState(false);

  React.useEffect(() => {
    setClient(true);
  }, []);

  return (
    <section
      className={`molecule-post-card width--100 ${className}`}
      {...props}
    >
      <Link to={path} className="width--100">
        <section className="molecule-post-card__thumbnail post-card-thumbnail width--100">
          <section className="post-card-thumbnail__img">
            {thumbnail && isClient && <GatsbyImage fluid={thumbnail} />}
          </section>
          {!thumbnail && (
            <section className="post-card-thumbnail__overlay flex flex--align-center flex--justify-center">
              <p className="text--gray">No Image Found</p>
            </section>
          )}
          <div className="post-card-thumbnail__overlay"></div>
        </section>
      </Link>
      <section className="width--100 mt-3">
        <Link to={path}>
          <span title={title}>
            <h3 className="molecule-post-card__title">{title}</h3>
          </span>
        </Link>

        <Link to={path}>
          <span title={description}>
            <p className="molecule-post-card__description text--gray">
              {description}
            </p>
          </span>
        </Link>

        {tags && (
          <section className="width--100 flex flex--wrap flex--align-start flex--justify-start mb-2">
            {tags.map((item, index) => (
              <Tag key={index} color="yellow" className="mr-2 mb-2">
                {item}
              </Tag>
            ))}
          </section>
        )}
        <p className="text--gray" style={{ fontSize: '12px' }}>
          {info}
        </p>
      </section>
    </section>
  );
};

PostCard.defaultProps = {
  path: '',
};

export default PostCard;
