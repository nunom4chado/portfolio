import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div css={`
      text-align: center;
      margin-top: 3rem;
    `}>
      <h1>Where did you go?</h1>
      <p>Nothing to see here! Go back to <Link to="/">Home Page</Link>.</p>
    </div>
  </Layout>
)

export default NotFoundPage
