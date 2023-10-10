# rc-easy-tabs



[![NPM](https://img.shields.io/npm/v/rc-easy-tabs.svg)](https://www.npmjs.com/package/rc-easy-tabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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