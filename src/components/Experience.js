import React from "react"
import styled from "styled-components"

import SubHeading from "./SubHeading"
import Tabs from "./Tabs"
import Caret from "../images/caret.svg"

const ExperienceContainer = styled.section`
  margin: 0 auto;
  max-width: 680px;
`

const Experience = () => (
  <ExperienceContainer>
    <SubHeading>NM.<span style={{color: "#4CDFE8"}}>getExperience</span>()</SubHeading>
    <Tabs>
      <div label="Work">
        <div>Work Content</div>
      </div>
      <div label="Education">
      <div>Education Content</div>
      </div>
    </Tabs>
  </ExperienceContainer>
)

export default Experience