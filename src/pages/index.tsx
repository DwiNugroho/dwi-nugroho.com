import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import ReactToolTip from 'react-tooltip';
import { FluidObject } from 'gatsby-image';

import Template from '@templates/main';
import Button from '@atoms/button';
import ProjectCard from '@molecules/project-card';
import PostCard from '@molecules/post-card';
import Img from '@atoms/img';

import Mail from '@/assets/icons/mail.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';

import './style.scss';

interface markdownProps {
  nodes: {
    excerpt: string;
    timeToRead: number;
    frontmatter: {
      title: string;
      tags?: string[];
      path?: string;
      description?: string;
      date?: string;
      live?: string;
      source?: string;
      stacks?: string[];
      cover?: {
        childImageSharp?: {
          fluid?: FluidObject;
        };
      };
    };
  }[];
}

export interface Props extends PageProps {
  data: {
    popularArticles: markdownProps;
    popularProjects: markdownProps;
  };
}

const Home: React.FC<Props> = ({ data }) => {
  const [isClient, setClient] = React.useState(false);

  React.useEffect(() => {
    setClient(true);
  }, []);
  return (
    <Template>
      <section className="width--100 background--spring-wood">
        <section className="container">
          <section className="hero flex flex--row-reverse flex--align-center py-5">
            <section className="hero__image background--white">
              <Img
                src="dwi-nugroho.png"
                cover
                style={{ borderRadius: '4px' }}
              />
            </section>
            <div className="mx-5 my-2"></div>
            <section className="width--100">
              <h1>Dwi Nugroho</h1>
              <p>
                I'm a frontend engineer specializing in web development with
                almost 2 years of experience. Have professional experience with
                some popular frontend frameworks like{' '}
                <a href="https://reactjs.org/">ReactJs</a>,{' '}
                <a href="https://vuejs.org/">VueJs</a>,{' '}
                <a href="https://www.gatsbyjs.com/">GatsbyJs</a> for web
                development, and{' '}
                <a href="https://reactnative.dev/">React Native</a> for mobile
                applications development.
              </p>
              <section className="flex flex--align-center mt-4">
                <Link to="/me">
                  <Button size="large" color="blue">
                    More About Me
                  </Button>
                </Link>
                <a
                  data-tip="hello@dwi-nugroho.com"
                  href="mailto: hello@dwi-nugroho.com"
                  target="_blank"
                  className="text--lighter-black ml-4 mb-0"
                  style={{ marginTop: '8px' }}
                >
                  <Mail />
                </a>
                <a
                  data-tip="LinkedIn"
                  href="https://www.linkedin.com/in/dwi-nugroho/"
                  target="_blank"
                  className="text--lighter-black ml-4 mb-0"
                  style={{ marginTop: '8px' }}
                >
                  <LinkedIn />
                </a>
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
          <h2 className="mb-0">Projects.</h2>
          <Link to="/projects">
            <Button color="yellow">View all</Button>
          </Link>
        </section>
        <hr />

        <section className="width--100 mt-5">
          {data.popularProjects.nodes.map((item, index) => (
            <section
              key={`popular-project-${index}`}
              className="width--100 mb-5"
            >
              <ProjectCard
                title={item.frontmatter.title}
                thumbnail={item.frontmatter.cover.childImageSharp.fluid}
                {...item.frontmatter}
              />
            </section>
          ))}
        </section>
        <br />
        <section className="collaboration background--spring-wood p-4 flex flex--justify-space-between flex--align-center">
          <h3 className="mb-0">Interested working with me?</h3>
          <div className="m-3"></div>
          <section className="collaboration__cta flex">
            <Link to="/projects">
              <Button size="large" appearance="outline" color="yellow">
                See More Projects
              </Button>
            </Link>
            <div className="m-2"></div>
            <a href="mailto: hello@dwi-nugroho.com">
              <Button
                size="large"
                color="yellow"
                className="flex flex--justify-center"
              >
                <Mail />
                <div className="mx-1"></div>
                <p className="mb-0">Email Me</p>
              </Button>
            </a>
          </section>
        </section>
        <br />
        <br />
        <br />
        <section className="flex flex--align-center flex--justify-space-between mb-3">
          <h2 className="mb-0">Articles.</h2>
          <Link to="/blog">
            <Button color="yellow">View all</Button>
          </Link>
        </section>
        <hr />

        <section className="popular-articles flex flex--wrap width--100">
          {data.popularArticles.nodes.map((item, index) => (
            <section
              key={`popular-article-${index}`}
              className="popular-articles__item"
            >
              <PostCard
                title={item.frontmatter.title}
                thumbnail={
                  item.frontmatter.cover
                    ? item.frontmatter.cover.childImageSharp.fluid
                    : null
                }
                description={item.excerpt}
                path={item.frontmatter.path}
                tags={item.frontmatter.tags}
                info={`${item.frontmatter.date || ''} · ${
                  item.timeToRead
                } min read`}
              />
            </section>
          ))}
        </section>
      </section>
      {isClient && <ReactToolTip effect="solid" place="bottom" />}
    </Template>
  );
};

export const pageQuery = graphql`
  query PopularArticles {
    popularArticles: allMarkdownRemark(
      limit: 7
      filter: { frontmatter: { type: { eq: "article" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt(pruneLength: 280)
        timeToRead
        frontmatter {
          title
          tags
          path
          description
          date(formatString: "MMM DD, YYYY")
          cover {
            childImageSharp {
              fluid(maxWidth: 1140, quality: 100) {
                aspectRatio
                base64
                originalImg
                originalName
                presentationHeight
                presentationWidth
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    }
    popularProjects: allMarkdownRemark(
      limit: 3
      filter: {
        frontmatter: {
          type: { eq: "project" }
          path: { ne: "/projects/personal-website" }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          path
          description
          live
          source
          stacks
          cover {
            childImageSharp {
              fluid(maxWidth: 1140, quality: 100) {
                aspectRatio
                base64
                originalImg
                originalName
                presentationHeight
                presentationWidth
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;
