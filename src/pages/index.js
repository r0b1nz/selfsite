import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"

import Album from "../components/album"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Album />
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </React.Fragment>
)

export default IndexPage
