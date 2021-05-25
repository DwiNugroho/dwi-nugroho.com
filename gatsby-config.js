/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Dwi Nugroho`,
    description: `I'm a Frontend Engineer and Expert Googler. I build things with code, make digital products to improve how humans living their life.`,
    author: `@dwinugrohoo__`,
    siteUrl: 'https://www.dwi-nugroho.com/',
    siteLogo: 'https://www.dwi-nugroho.com/dwi-nugroho.png',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },

    // sass
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [path.resolve(`./src/assets/scss/main.scss`)],
      },
    },

    // typography
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/plugins/typography`,
      },
    },

    // SVG
    {
      resolve: 'gatsby-plugin-react-svg',
      // options: {
      //   rule: {
      //     include: /assets/,
      //   },
      // },
    },

    // alias
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@atoms': path.resolve(__dirname, 'src/components/atoms'),
          '@molecules': path.resolve(__dirname, 'src/components/molecules'),
          '@organisms': path.resolve(__dirname, 'src/components/organisms'),
          '@templates': path.resolve(__dirname, 'src/components/templates'),
        },
        extensions: ['js', 'tsx', 'ts'],
      },
    },

    // image
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, 'src/assets/img'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dwi Nugroho`,
        short_name: `Dwi Nugroho`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `static/dwi-nugroho.png`, // This path is relative to the root of the site.
      },
    },

    // Loading Progress
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#406b85`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    // markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(__dirname, 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            // options: {
            //   maxWidth: 650,
            //   wrapperStyle: (fluidResult) => `max-width: none;`,
            // },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true,
              },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          'gatsby-remark-autolink-headers',
        ],
      },
    },

    // smooth scroll
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -128,
      },
    },

    'gatsby-plugin-offline',

    // RSS
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((item) => {
                return Object.assign({}, item.frontmatter, {
                  description: item.frontmatter.description,
                  date: item.frontmatter.date,
                  url: site.siteMetadata.siteUrl + item.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + item.frontmatter.path,
                  custom_elements: [{ 'content:encoded': item.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: {order: DESC, fields: frontmatter___date}
                  limit: 30
                  filter: {frontmatter: {type: {eq: "article"}}}
                ) {
                  nodes {
                    frontmatter {
                      title
                      date
                      path
                      description
                    }
                    excerpt
                    html
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Dwi Nugroho | RSS Feed',
          },
        ],
      },
    },
  ],
};
