/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface Props {
  /**
   *  A Seo must have title atrribute
   */
  title?: string;
  /**
   *  A Seo can have description atrribute
   */
  description?: string;
  /**
   *  A Seo can have thumbnail atrribute
   */
  lang?: string;
  /**
   *  A Seo can have tags atrribute
   */
  meta?: object[];
  image?: string;
  type?: 'website' | 'article';
}

const Seo: React.FC<Props> = ({
  description,
  lang,
  image,
  meta,
  title,
  type,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            siteLogo
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const seoImage = image
    ? `${site.siteMetadata.siteUrl}${image}`
    : site.siteMetadata.siteLogo;

  const ogType = type || 'website';
  const ogCard = type && type === 'article' ? 'summary_large_image' : 'summary';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={title ? `%s | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: seoImage,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          name: `twitter:card`,
          content: ogCard,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'twitter:image',
          content: seoImage,
        },
        ...meta,
      ]}
      defer={false}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

// Seo.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// };

export default Seo;
