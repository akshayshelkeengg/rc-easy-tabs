import React, { useState } from 'react'

import TabComponent from 'rc-easy-tabs'
import 'rc-easy-tabs/dist/index.css'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const App = () => {
  const tabStyle= {
    background:'#C0CFFA',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding:'4px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    cursor: 'pointer',
  }

  const selectedTab= {
    borderStyle: 'solid',
    borderWidth: '1px',
    padding:'6px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    cursor: 'pointer',
    background:'#48578E',    
    color:'white'
  }  
  const [tabs,setTabs]=useState([
    {title:"Tab1",component:<Tab1/>},
    {title:"Tab2",component:<Tab2/>},   
  ])
  return <TabComponent 
              tabsData={tabs} 
              tabStyle={tabStyle} 
              selectedTabStyle={selectedTab}
          />
}

export default App
