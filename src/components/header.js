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

  @media (max-width: 1300px) and (min-width: 600px) {
    padding: 1.0875rem 2.5rem;
  }
`

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.31rem;
`

const MobileMenuIcon = ({onClick, isOpen}) => (
  <button type="button"
    aria-label="Menu"
    aria-controls="navigation"
    className={isOpen ? "open" : ""}
    onClick={() => onClick()}
    css={`
      display: none;
      z-index: 600;
      cursor: pointer;
      border: none;
      background: transparent;

      margin: 1em;
      width: 40px;
    
      &:after, 
      &:before, 
      & span {
        background-color: #fff;
        border-radius: 3px;
        content: '';
        display: block;
        height: 2px;
        margin: 7px 0;
        transition: all .2s ease-in-out;
      }

      /* Animates to "X" when Mobile Menu is open */
      &.open:before {
        transform: translateY(9px) rotate(135deg);
      }
      &.open:after {
        transform: translateY(-9px) rotate(-135deg);
      }
      &.open span {
        transform: scale(0);
      }

      @media (max-width: 768px) {
        display: block;
      }
    `}
    >
    <span></span>
  </button>
)

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
    opacity: 0;
    transform: scale(0);
    transition: .3s ease;
    z-index: 500;

    &.open {
      opacity: 1;
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
        <MobileMenuIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
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
