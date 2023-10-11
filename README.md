# rc-easy-tabs




 rc-easy-tabs is a user-friendly React library designed for effortless creation of customizable and responsive tabs with components. Its intuitive interface streamlines the tab-building process, offering a seamless experience for developers. With a focus on flexibility, it empowers users to tailor the tabs to their specific needs, ensuring a visually appealing and responsive design that effortlessly adapts to various screen sizes.

## Install

```bash
npm install --save rc-easy-tabs
```

## Usage

```jsx
import React, { useState } from 'react'

import TabComponent from 'rc-easy-tabs'

const App = () => {
  const tabStyle= {
    background:'#C0CFFA',   
  }

  const selectedTab= {  
    background:'#48578E',    
    color:'white'
  }  
  const [tabsData,setTabsData]=useState([
    {title:"Tab1",component:<Component1/>}, //Component is your another react component that you want to use as in tab
    {title:"Tab2",component:<Component2/>},   
  ])
  return <TabComponent 
              tabsData={tabs} 
              tabStyle={tabStyle} //optional, If not provided default style will be applied
              selectedTabStyle={selectedTab} //optional, If not provided default style will be applied
          />
}

export default App
```

## License

MIT © [akshayshelkeengg](https://github.com/akshayshelkeengg)


## Keywords

- react
- easy
- tabs
- react-component
- responsive tabs
- customizable