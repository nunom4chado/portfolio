import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/PageHeading"

const Container = styled.div`
  margin: 1rem auto 2.5rem;
  max-width: 1054px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 3.5rem;

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

const Card = ({data}) => (
  <div key={data.id}
  css={`
    background-color: #1C242C;
    border-radius: 4px;
    padding: 1.5rem;
  `}>
    <div css={`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}>
      <span css={`color: #728CA0;`}>{data.date}</span>
      <div>
        <IconLink>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </IconLink>
        <IconLink>
          <FontAwesomeIcon icon="external-link-square-alt" />
        </IconLink>
      </div>
    </div>

    <h3 css={`
      font-family: "Roboto", sans-serif;
      font-size: 1.3125rem;
      color: #E5E5E5;
      margin: 1rem 0 .5rem;
    `}>{data.title}</h3>
    <p css={`
      font-family: "Roboto", sans-serif;
      line-height: 1.45;
    `}>{data.description}</p>
    <ul css={`
      list-style: none;
      padding: 0;
      margin: 0 -0.5rem;
    `}>
      {data.tags.map(item => (
        <li css={`
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
)

const ProjectsData = [
  {
    id: 0,
    title: "portolimousines.com redesign, developement and deploy",
    date: 2020,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      "AngularJS",
      "SCSS",
      "HTML"
    ]
  },
  {
    id: 1,
    title: "portolimousines.com redesign, developement and deploy",
    date: 2019,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      "React",
      "GraphQL",
      "Styled-Components"
    ]
  },
  {
    id: 2,
    title: "portolimousines.com redesign, developement and deploy",
    date: 2018,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      "AngularJS",
      "SCSS",
      "HTML"
    ]
  },
  {
    id: 3,
    title: "portolimousines.com redesign, developement and deploy",
    date: 2017,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      "AngularJS",
      "SCSS",
      "HTML"
    ]
  },
  {
    id: 4,
    title: "portolimousines.com redesign, developement and deploy",
    date: 2016,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      "AngularJS",
      "SCSS",
      "HTML"
    ]
  },
  {
    id: 5,
    title: "portolimousines.com redesign, developement and deploy",
    date: 2015,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      "AngularJS",
      "SCSS",
      "HTML"
    ]
  }
]

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Container>
      <PageHeading css={`text-align: center;`}><span style={{color: "#4CDFE8"}}>$</span> ls Projects</PageHeading>
      <Grid>
        {ProjectsData.map(project => (
          <Card data={project} />
        ))}
      </Grid>
    </Container>
  </Layout>
)

export default ProjectsPage
