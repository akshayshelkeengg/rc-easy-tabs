import React, { useState } from 'react'

import TabComponent from 'rc-easy-tabs'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const App = () => {
  const tabStyle= {
    background:'#C0CFFA',   
  }

  const selectedTab= {  
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
