const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(
    './src/components/templates/page-template/index.tsx'
  );
  const articleTemplate = path.resolve(
    './src/components/templates/article-template/index.tsx'
  );
  const projectTemplate = path.resolve(
    './src/components/templates/project-template/index.tsx'
  );

  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
            type
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.nodes.map((item) => {
      // pages
      if (item.frontmatter.type === 'page') {
        createPage({
          path: item.frontmatter.path,
          component: pageTemplate,
          context: {
            slug: item.frontmatter.path,
          },
        });
      }

      // article
      if (item.frontmatter.type === 'article') {
        createPage({
          path: item.frontmatter.path,
          component: articleTemplate,
          context: {
            slug: item.frontmatter.path,
          },
        });
      }

      // project
      if (item.frontmatter.type === 'project') {
        createPage({
          path: item.frontmatter.path,
          component: projectTemplate,
          context: {
            slug: item.frontmatter.path,
          },
        });
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
