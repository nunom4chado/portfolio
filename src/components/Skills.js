import React from "react"
import styled from "styled-components"

import Caret from "../images/caret.svg"

const SkillsContainer = styled.section`
  margin: 0 auto;
  max-width: 1054px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 450px;
    margin: 0 auto;
  }
`

const Col = styled.div`
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 0 0 2.5rem;
    
  }
`

const Ul = styled.ul`
  columns: 100px ${props => props.columns || "1"};
  column-gap: 2.5rem;
  list-style-image: url(${Caret});
  list-style-position: inside;
  padding: 0;

  & li {
    line-height: 1.5rem;
    color: #728CA0;
  }
`

const SkillList = (props) => (
  <Ul columns={props.columns}>
    { props.skills.map(skill => <li key={skill}>{skill}</li>) }
  </Ul>
)


const Skills = ({data}) => (
  <SkillsContainer>
    <h2>NM.<span css={`color: #4CDFE8`}>getSkills</span>()</h2>
    <Row>
      <Col>
        <h3>Languages</h3>
        <SkillList skills={data.languages} />
      </Col>
      <Col>
        <h3>Technologies</h3>
        <SkillList skills={data.technologies} columns="2" />
      </Col>
      <Col>
        <h3>Design Software</h3>
        <SkillList skills={data.design} columns="2" />
      </Col>
    </Row>
  </SkillsContainer>
)

export default Skills