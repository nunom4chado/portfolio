import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
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
const MobileMenuIcon = styled.div`
  width: 40px;
  height: 40px;
  background: grey;
  display: none;
  z-index: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const Nav = styled.nav`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #121416;
    transform: scale(0);
    transition: .3s ease;
    z-index: 500;

    &.open {
      transform: scale(1);

      a {
        font-size: 2rem;
        padding: 1.5rem;
      }
    }
  }
`

const NavLink = styled(Link)`
  padding: 1rem;
  color: #A0B3C6;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
`

const Header = ({ siteTitle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header>
      <Container>
        <Logo to="/">
          {siteTitle}
        </Logo>
        <MobileMenuIcon onClick={toggleMobileMenu} />
        <Nav className={isMobileMenuOpen ? "open" : ""}>
          <NavLink to="/about/" activeClassName="active">/about</NavLink>
          <NavLink to="/projects/" activeClassName="active">/projects</NavLink>
          <NavLink to="/contact/" activeClassName="active">/contact</NavLink>
        </Nav>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
