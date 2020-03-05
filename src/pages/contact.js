import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PageHeading from "../components/PageHeading"

const CenterSection = styled.div`
  height: calc(100vh - 12rem);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
`

const TextCenter = styled.div`
  text-align: center;
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
      <TextCenter>
        <PageHeading><span css="color: #4CDFE8;">connect</span>() with&nbsp;me</PageHeading>
        <ContactParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ContactParagraph>
        <ExternalLink rel="noopener noreferrer" href="https://www.linkedin.com/in/nunom4chado/" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]}  />
        </ExternalLink>
        <ExternalLink rel="noopener noreferrer" href="https://github.com/nunom4chado" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]}  />
        </ExternalLink>
        <ExternalLink rel="noopener noreferrer" href="mailto:nunom4chado@gmail.com" target="_blank">
          <FontAwesomeIcon icon="envelope"  />
        </ExternalLink>
      </TextCenter>
    </CenterSection>
  </Layout>
)

export default ContactPage
