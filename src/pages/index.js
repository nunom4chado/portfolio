import React from "react"
import styled from "styled-components"
import Typist from "react-typist"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/PageHeading"

const CenterSection = styled.div`
  height: calc(100vh - 12rem);
  display: flex;
  align-items: center;
  min-height: 300px;
`

const TypingAnimation = styled(Typist)`
  & .Cursor {
    display: inline-block;

    &--blinking {
      opacity: 1;
      animation: blink 1s linear infinite;
      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenterSection>
      <div>
        <PageHeading>
          <TypingAnimation cursor={{element: '_'}} css="height: 237px">
            Hello,<Typist.Delay ms={1500} /><br />
            I’m a{" "}
            <span css="color: #4CDFE8">
              Full&nbsp;Stack
              <br />
              Web Developer
            </span>
          </TypingAnimation>
        </PageHeading>
      </div>
    </CenterSection>
  </Layout>
)

export default IndexPage
