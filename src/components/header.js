import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "./container"

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.31rem;
`;

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Logo to="/">
        {siteTitle}
      </Logo>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
