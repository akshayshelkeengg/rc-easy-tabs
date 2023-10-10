import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
  singleTab: {
    borderStyle: 'solid',
    borderWidth: '1px',
    padding:'4px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    cursor: 'pointer',
  },  
  selectedTab: {
    borderStyle: 'solid',
    borderWidth: '1px',
    padding:'6px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    cursor: 'pointer',
    background:'#ccc',
  },  
};

export default function TabComponent({tabsData,tabStyle,selectedTabStyle}) {  
  
  const [tabs,setTabs]=useState(tabsData)

  useEffect(()=>{
    const newTabsData=tabs.map((tab,index)=>{
      if(index==0){
        return {...tab,selected:true}
      }
      else{
        return {...tab,selected:false}
      }
    })
    setTabs(newTabsData)
  },[])

  const handleTabSelection=(selectedIndex)=>{
    const newTabsData=tabs.map((tab,index)=>{
      if(selectedIndex==index){
        return {...tab,selected:true}
      }
      else{
        return{...tab,selected:false}
      }
    })
    setTabs(newTabsData)
  }

  return (    
    <div style={{margin:'10px'}}>
      <div className='row'>
        TabComponent
      </div>
      <div className='row' >        
        {tabs.map((tab,index)=>{
          return (
          <div key={index} className='col-lg-3 col-md-4 col-sm-9' style={tab.selected?selectedTabStyle===undefined?styles.selectedTab:selectedTabStyle:tabStyle===undefined?styles.singleTab:tabStyle} onClick={()=>handleTabSelection(index)}>
              {tab.title}
          </div>)
        })}
        <div className='row'> 
          {tabs.map((tab,index)=>{
            return (
            <div key={index} className='col-lg-12 col-md-12 col-sm-12'>
                {tab.selected && tab.component}
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}
