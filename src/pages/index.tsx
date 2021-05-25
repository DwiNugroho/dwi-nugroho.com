import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import ReactToolTip from 'react-tooltip';

import Template from '@templates/main';
import Button from '@atoms/button';
import PostCard from '@molecules/post-card';
import Img from '@atoms/img';

import Mail from '@/assets/icons/mail.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';

import './style.scss';

const Home: React.FC<PageProps> = ({ data }) => {
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
                src="dwi-nugroho.jpeg"
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
          <h2 className="mb-0">Popular Articles.</h2>
          <Link to="/blog">
            <Button color="yellow">View all</Button>
          </Link>
        </section>
        <hr />

        <section className="popular-articles flex flex--wrap width--100">
          {(data as any).allMarkdownRemark.nodes.map((item, index) => (
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
    allMarkdownRemark(
      limit: 7
      filter: { frontmatter: { type: { eq: "article" } } }
    ) {
      nodes {
        frontmatter {
          title
          tags
          path
          description
          date(formatString: "MMM DD, YYYY")
          cover {
            childImageSharp {
              fluid {
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
        excerpt(pruneLength: 280)
        children {
          id
        }
        timeToRead
      }
    }
  }
`;

export default Home;
