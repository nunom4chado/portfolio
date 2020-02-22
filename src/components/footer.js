import React from "react"
import styled from "styled-components"

const FooterSection = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  text-align: center;
  color: #728CA0;
  font-size: 0.875rem;
`

const Footer = () => (
  <FooterSection>
    Built with
    {` `}
    <a css="color: #A0B3C6; text-decoration: none;" href="https://www.gatsbyjs.org">Gatsby</a>
    {` | `}
    {new Date().getFullYear()}
  </FooterSection>
)

export default Footer
