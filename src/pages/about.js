import React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/PageHeading"
import ProfilePic from "../components/ProfilePic"
import Skills from "../components/Skills"
import Experience from "../components/Experience"

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

  & p {
    color: #A0B3C6;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
  }
`

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />

    <AboutSection>
      <ProfilePic />

      <AboutContent>
        <PageHeading><span style={{color: "#4CDFE8"}}>$</span> whoami</PageHeading>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </AboutContent>
    </AboutSection>

    <Skills data={data.markdownRemark.frontmatter.skills} />

    <Experience data={data.markdownRemark.frontmatter.experience} />

  </Layout>
)

export const query = graphql`
  {
    markdownRemark(frontmatter: {title: {eq: "about"}}) {
      frontmatter {
        skills {
          languages
          technologies
          design
        }
        experience {
          work {
            title
            date
            text
          }
          education {
            title
            date
            text
          }
        }
      }
      html
    }
  }
`

export default AboutPage
