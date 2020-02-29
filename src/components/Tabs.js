import React, { useState } from 'react';
import styled from "styled-components"

const TabItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -3px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
`

const TabItemActive = styled(TabItem)`
  color: #4CDFE8;
  border-bottom: 3px solid #4CDFE8;
`

function Tab({label, activeTab, onClick}) {
  const StyledTab = activeTab === label ? TabItemActive : TabItem

  return (
    <StyledTab onClick={() => onClick(label)}>
      {label}
    </StyledTab>
  )
}

function Tabs({children}) {
  const [activeTab, setActiveTab] = useState(children[0].props.label); 

  const onClickTabItem = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <ol css={`
        border-bottom: 3px solid #ccc;
        padding-left: 0;
      `}>
        {children.map((child) => {
          const { label } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          )
        })}
      </ol>
      <div>
        {children.map((child) => {
          console.log(child.props)
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </div>
    </div>
  )
}

export default Tabs