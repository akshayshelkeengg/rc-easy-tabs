# rc-easy-tabs



[![NPM](https://img.shields.io/npm/v/rc-easy-tabs.svg)](https://www.npmjs.com/package/rc-easy-tabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rc-easy-tabs
```

## Usage

```jsx
import React, { useState } from 'react'

import  TabComponent  from 'rc-easy-tabs'

const App = () => {
  const [tabsData,setTabsData]=useState([
    {title:"Tab1",component:<Component1/>}, //Component is your another react component that you want to use as in tab
    {title:"Tab2",component:<Component2/>},   
  ])
  return <TabComponent tabsData={tabsData}/>
}

export default App
```

## License

MIT © [akshayshelkeengg](https://github.com/akshayshelkeengg)
