import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Heading = styled.h1`
  color: #fff;
  font-size: 4.5rem;
  font-weight: 700;
  margin-top: 10vh;

  @media (max-width: 768px) {
    font-size: 3.8rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hello,<br/>
    I’m a <span css="color: #4CDFE8">Full&nbsp;Stack<br/>
    Web Developer</span>_</Heading>
  </Layout>
)

export default IndexPage
