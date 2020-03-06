import React from "react"
import styled from "styled-components"
import Typist from "react-typist"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const CenterSection = styled.div`
  height: calc(100vh - 12rem);
  display: flex;
  align-items: center;
  min-height: 300px;
`

const TypingAnimation = styled(Typist)`
  height: 237px;

  @media (max-width: 625px) {
    font-size: 3rem;
    height: 260px;
  }

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
        <h1>
          <TypingAnimation cursor={{element: '_', hideWhenDone: true,}}>
            Hello,<Typist.Delay ms={1500} /><br />
            I’m a{" "}
            <span css="color: #4CDFE8">
              Full&nbsp;Stack
              <br />
              Web Developer
            </span>
          </TypingAnimation>
        </h1>
      </div>
    </CenterSection>
  </Layout>
)

export default IndexPage
