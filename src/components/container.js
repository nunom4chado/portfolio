import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.maxWidth || "1264"}px;
  padding: 1.0875rem 1.45rem;
`

export default Container