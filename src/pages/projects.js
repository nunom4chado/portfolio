import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Container = styled.div`
  margin: .5rem auto 2.5rem;
  max-width: 1054px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 4.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`
const IconLink = styled.a`
  font-size: 1rem;
  color: #E5E5E5;
  cursor: pointer;
  font-size: 1.25rem;
  
  &:last-child {
    margin-left: .75rem;
  }
`

const Card = ({data}) => {
  const project = data.node.childMarkdownRemark

  return (
    <div
    css={`
      background-color: #1C242C;
      border-radius: 4px;
    `}>
      <a target="_blank" rel="noopener noreferrer" href={project.frontmatter.url}>
        <Img fluid={project.frontmatter.image.childImageSharp.fluid} css={`
          filter: opacity(0.32);
          transition: .3s ease-out;

          &:hover {
            filter: opacity(1);
          }
        `} />
      </a>
      <div css={`
        padding: 1.5rem;
      `}>
        <div css={`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}>
          <span css={`color: #728CA0;`}>{project.frontmatter.date}</span>
          <div>
            {project.frontmatter.gitrepo && 
              <IconLink target="_blank" rel="noopener noreferrer" href={project.frontmatter.gitrepo}>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </IconLink>
            }
            <IconLink target="_blank" rel="noopener noreferrer" href={project.frontmatter.url}>
              <FontAwesomeIcon icon="external-link-square-alt" />
            </IconLink>
          </div>
        </div>

        <h3 css={`
          font-family: "Roboto", sans-serif;
          font-size: 1.3125rem;
          margin: 1rem 0 .5rem;
        `}>
          <a target="_blank"
            rel="noopener noreferrer"
            href={project.frontmatter.url}
            css={`
              color: #E5E5E5;
              text-decoration: none;
            `}
            >
            {project.frontmatter.title}
          </a>
        </h3>
        <div css={`
          font-family: "Roboto", sans-serif;
          line-height: 1.45;
        `} dangerouslySetInnerHTML={{ __html: project.html }} />
        <ul css={`
          list-style: none;
          padding: 0;
          margin: 0 -0.5rem;
        `}>
          {project.frontmatter.tags.map(item => (
            <li key={item}
              css={`
              font-size: .75rem;
              display: inline-block;
              border: 1px solid #4CDFE8;
              border-radius: 50px;
              color: #4CDFE8;
              padding: .25rem .5rem;
              margin: .25rem;
            `}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ProjectsPage = ({data}) => (
  <Layout>
    <SEO title="Projects" />
    <Container>
      <h1 css={`text-align: center;`}><span css={`color: #4CDFE8`}>$</span> ls projects</h1>
      <Grid>
        {data.allFile.edges.map(project => (
          <Card key={project.node.childMarkdownRemark.id} data={project} />
        ))}
      </Grid>
    </Container>
  </Layout>
)

export const query = graphql`
  {
    allFile(filter: {relativeDirectory: {eq: "projects"}}, sort: {fields: childMarkdownRemark___frontmatter___date, order: DESC}) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              date
              url
              gitrepo
              tags
              image {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  }
`

export default ProjectsPage
