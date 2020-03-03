/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope, faExternalLinkSquareAlt)

const ViewPort = styled.div`
  position: relative;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  padding-bottom: 2.5rem; /* must be the same as footer height */
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 1264px; /* 1054 */
  padding: 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ViewPort>
      <ContentWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
      </ContentWrapper>
      <Footer></Footer>
    </ViewPort>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
