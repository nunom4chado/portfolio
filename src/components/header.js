import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1264px;
  padding: 1.0875rem 1.45rem;
`

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.31rem;
`

const Nav = styled.nav`
  display: flex;
`

const NavLink = styled(Link)`
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Logo to="/">
        {siteTitle}
      </Logo>
      <Nav>
        <NavLink to="/about/">/about</NavLink>
        <NavLink to="/projects/">/projects</NavLink>
        <NavLink to="/contact/">/contact</NavLink>
      </Nav>
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
