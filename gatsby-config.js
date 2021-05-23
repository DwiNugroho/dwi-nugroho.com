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
    description: `Digital Garden by Dwi Nugroho`,
    author: `@dwinugroho`,
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
        icon: `src/assets/img/dwi-nugroho.png`, // This path is relative to the root of the site.
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
    'gatsby-transformer-remark',
  ],
};
