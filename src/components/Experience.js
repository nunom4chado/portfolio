import React from "react"
import styled from "styled-components"

import SubHeading from "./SubHeading"
import Tabs from "./Tabs"
import Caret from "../images/caret.svg"

const ExperienceContainer = styled.section`
  margin: 0 auto;
  max-width: 680px;
`

const Ul = styled.ul`
  list-style-image: url(${Caret});
  padding: 1.5rem 2rem;

  & li {
    padding-left: .5rem;
    margin-bottom: 2rem;
  }

  & h3 {
    font-family: "Roboto", sans-serif;
    font-size: 1.125rem;
    margin-bottom: .25rem;
  }

  & p {
    margin-bottom: .25rem;
  }

  & p.date {
    font-size: .75rem;
    color: #505E6C;
    font-weight: 700;
  }

  & p.text {
    color: #728CA0;
    font-family: "Roboto", sans-serif;
    line-height: 1.4;
  }
`

const ExperienceList = ({data}) => (
  <Ul>
    {data.map(item => (
      <li key={item.title}>
        <h3>{item.title}</h3>
        <p className="date">{item.date}</p>
        <p className="text">{item.text}</p>
      </li>
    ))}
  </Ul>
)

const Experience = ({data}) => (
  <ExperienceContainer>
    <SubHeading>NM.<span style={{color: "#4CDFE8"}}>getExperience</span>()</SubHeading>
    <Tabs>
      <div label="Work">
        <ExperienceList data={data.work} />
      </div>
      <div label="Education">
        <ExperienceList data={data.education} />
      </div>
    </Tabs>
  </ExperienceContainer>
)

export default Experience