import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import Template from '@templates/main';
import ProjectCard from '@molecules/project-card';

import './style.scss';

export interface Props extends PageProps {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter?: {
          cover?: {
            childImageSharp?: {
              fluid?: FluidObject;
            };
          };
          title: string;
          description: string;
          path: string;
          stacks: string[];
        };
      }[];
    };
  };
}

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <Template title="Projects" description="A showcase of my recent projects.">
      <section className="width--100 background--spring-wood">
        <section className="container py-5">
          <h1>Projects.</h1>
          <h4 className="text--light-black">
            A showcase of my recent projects.
          </h4>
        </section>
      </section>
      <br />
      <section className="container">
        <section className="width--100 mt-3">
          {data.allMarkdownRemark.nodes.map((item, index) => (
            <section key={`project-${index}`} className="width--100 mb-5">
              <ProjectCard
                title={item.frontmatter.title}
                thumbnail={item.frontmatter.cover.childImageSharp.fluid}
                {...item.frontmatter}
              />
            </section>
          ))}
        </section>
      </section>
    </Template>
  );
};

export const pageQuery = graphql`
  query AllProjects {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stacks
          path
          description
          live
          source
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

export default Projects;
