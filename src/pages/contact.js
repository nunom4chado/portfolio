import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CenterSection = styled.div`
  height: calc(100vh - 12rem);
  display: flex;
  justify-content: center;
  align-items: center;
`

const AlignCenter = styled.div`
  text-align: center;
`

const Heading = styled.h1`
  color: #fff;
  font-size: 4.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3.8rem;
  }
`

const ContactParagraph = styled.p`
  max-width: 730px;
  font-size: 1.3125rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  margin: 48px 0;
`

const ExternalLink = styled.a`
  font-size: 3rem;
  margin: 0 2rem 0;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <CenterSection>
      <AlignCenter>
        <Heading><span css="color: #4CDFE8;">connect</span>() with&nbsp;me</Heading>
        <ContactParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ContactParagraph>
        <ExternalLink href="https://google.com" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]}  />
        </ExternalLink>
        <ExternalLink href="https://google.com" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]}  />
        </ExternalLink>
        <ExternalLink href="https://google.com" target="_blank">
          <FontAwesomeIcon icon="envelope"  />
        </ExternalLink>
      </AlignCenter>
    </CenterSection>
  </Layout>
)

export default ContactPage
