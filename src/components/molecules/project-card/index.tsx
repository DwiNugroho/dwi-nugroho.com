import * as React from 'react';
import { Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';

import Button from '@atoms/button';

import Code from '@/assets/icons/code.svg';
import LinkIcon from '@/assets/icons/link-2.svg';

import './style.scss';

export interface Props {
  /**
   *  A ProjectCard must have title atrribute
   */
  title: string;
  /**
   *  A ProjectCard can have description atrribute
   */
  description?: string;
  /**
   *  A ProjectCard can have thumbnail atrribute
   */
  thumbnail?: FluidObject;
  /**
   *  A ProjectCard can have path atrribute
   */
  path?: string;
  /**
   *  A ProjectCard can have className atrribute
   */
  className?: string;
  information?: string;
  live?: string;
  source?: string;
}

export const ProjectCard: React.FC<Props> = ({
  description,
  title,
  thumbnail,
  className,
  path,
  information,
  live,
  source,
  ...props
}) => {
  const [isClient, setClient] = React.useState(false);

  // const [stacksSort, setStacksSort] = React.useState('');

  React.useEffect(() => {
    setClient(true);
  }, []);

  return (
    <section
      className={`molecule-project-card width--100 flex flex--align-stretch ${className}`}
      {...props}
    >
      <Link to={path} className="width--100">
        <section className="molecule-project-card__thumbnail project-card-thumbnail width--100">
          <section className="project-card-thumbnail__img">
            {thumbnail && isClient && <GatsbyImage fluid={thumbnail} />}
          </section>
          {!thumbnail && (
            <section className="project-card-thumbnail__overlay flex flex--align-center flex--justify-center">
              <p className="text--gray">No Image Found</p>
            </section>
          )}
          <div className="project-card-thumbnail__overlay"></div>
        </section>
      </Link>
      <div className="mx-3 my-2"></div>
      <section className="width--100 flex flex--column flex--justify-center flex--align-start">
        <Link to={path}>
          <h3 className="molecule-project-card__title mb-2">{title}</h3>
        </Link>
        <p className="text--lighter-black" style={{ fontSize: '14px' }}>
          {information}
        </p>
        <section className="flex flex--align-center">
          {source ? (
            <a href={source} target="_blank">
              <Button
                appearance="outline"
                color="blue"
                className="flex flex--align-center flex--justify-center"
              >
                <Code style={{ width: '20px' }} />
                <div className="mx-1"></div>
                <p className="mb-0">Source Code</p>
              </Button>
            </a>
          ) : (
            <Button
              appearance="outline"
              className="flex flex--align-center flex--justify-center"
              disabled
            >
              <Code style={{ width: '20px' }} />
              <div className="mx-1"></div>
              <p className="mb-0">Source Code</p>
            </Button>
          )}
          <div className="mx-2"></div>
          {live ? (
            <a href={live} target="_blank">
              <Button
                color="blue"
                className="flex flex--align-center flex--justify-center"
              >
                <LinkIcon style={{ width: '20px' }} />
                <div className="mx-1"></div>
                <p className="mb-0">Visit Project</p>
              </Button>
            </a>
          ) : (
            <Button
              className="flex flex--align-center flex--justify-center"
              disabled
            >
              <LinkIcon style={{ width: '20px' }} />
              <div className="mx-1"></div>
              <p className="mb-0">Visit Project</p>
            </Button>
          )}
        </section>
      </section>
    </section>
  );
};

ProjectCard.defaultProps = {
  path: '',
};

export default ProjectCard;
