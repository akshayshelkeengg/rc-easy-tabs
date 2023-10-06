import React, { useState } from 'react'

import TabComponent from 'rc-easy-tabs'
import 'rc-easy-tabs/dist/index.css'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const App = () => {
  const [tabs,setTabs]=useState([
    {title:"Tab1",component:<Tab1/>},
    {title:"Tab2",component:<Tab2/>}
  ])
  return <TabComponent tabsData={tabs}/>
}

export default App
