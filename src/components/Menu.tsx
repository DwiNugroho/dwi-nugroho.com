import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <section style={{ background: "#f4f4f4" }}>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </section>
)

export default Menu
