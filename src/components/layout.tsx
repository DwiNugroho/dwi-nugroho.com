import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

const Layout: React.FC = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <section className="container">
      <main>{children}</main>
      <footer>{`© ${new Date().getFullYear()}, Built with`}</footer>
    </section>
  )
}

export default Layout
