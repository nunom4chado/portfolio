import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/PageHeading"
import BodyText from "../components/BodyText"
import ProfilePic from "../components/ProfilePic"
import Skills from "../components/Skills"

const AboutSection = styled.section`
  margin: 0 auto;
  max-width: 1054px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const AboutContent = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <AboutSection>
      <ProfilePic />

      <AboutContent>
        <PageHeading><span style={{color: "#4CDFE8"}}>$</span> whoami</PageHeading>
        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        </BodyText>
        <BodyText>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BodyText>
      </AboutContent>
    </AboutSection>

    <Skills />

  </Layout>
)

export default AboutPage
