const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(
    './src/components/templates/page-template/index.tsx'
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
    });
  });
};
