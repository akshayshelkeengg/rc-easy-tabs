import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const style = {
  singleTab:{
    borderStyle: 'solid',
    borderWidth: '1px',
    padding:'4px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    cursor:'pointer'
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
  const [propTabStyle,setPropTabStyle]=useState()
  const [propSelectedTabStyle,setPropSelectedTabStyle]=useState()


  useEffect(()=>{
    if(tabStyle!==undefined){
      var newPropStyle={}
      if('borderTopLeftRadius' in tabStyle){
        console.log("Exists")
        newPropStyle={...tabStyle,borderTopLeftRadius:'10px',borderTopRightRadius: '10px',borderStyle: 'solid',  borderWidth: '1px', padding:'4px', cursor:'pointer'}
      }
      else{
        console.log("not Exists")
        newPropStyle={...tabStyle,borderTopLeftRadius:'10px',borderTopRightRadius: '10px',borderStyle: 'solid',  borderWidth: '1px', padding:'4px', cursor:'pointer'}
      }
      setPropTabStyle(newPropStyle)
    }
    if(selectedTabStyle!==undefined){
      if('borderTopLeftRadius' in selectedTabStyle){
        var newSelectedPropStyle={}
        console.log("Exists")
        newSelectedPropStyle={...selectedTabStyle,borderTopLeftRadius:'10px',borderTopRightRadius: '10px', borderStyle: 'solid',  borderWidth: '1px', padding:'6px',}
      }
      else{
        console.log("not Exists")
        newSelectedPropStyle={...selectedTabStyle,borderTopLeftRadius:'10px',borderTopRightRadius: '10px',borderStyle: 'solid',  borderWidth: '1px', padding:'4px', cursor:'pointer'}
      }
      setPropSelectedTabStyle(newSelectedPropStyle)
    }
    
  },[tabStyle,selectedTabStyle])

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
        {(tabStyle===undefined && selectedTabStyle===undefined) && tabs.map((tab,index)=>{
         
          return (          
          <div key={index} className={`col-lg-3 col-md-4 col-sm-9`} style={tab.selected?style.selectedTab:style.singleTab} onClick={()=>handleTabSelection(index)}>
              {tab.title}
          </div>)
        })}
        {(tabStyle!==undefined && selectedTabStyle!==undefined) && tabs.map((tab,index)=>{         
          return (          
          <div key={index} className={`col-lg-3 col-md-4 col-sm-9`} style={tab.selected?propSelectedTabStyle:propTabStyle} onClick={()=>handleTabSelection(index)}>
              {tab.title}
          </div>)
        })}
         {(tabStyle===undefined && selectedTabStyle!==undefined) && tabs.map((tab,index)=>{         
          return (          
          <div key={index} className={`col-lg-3 col-md-4 col-sm-9`} style={tab.selected?propSelectedTabStyle:style.singleTab} onClick={()=>handleTabSelection(index)}>
              {tab.title}
          </div>)
        })}
          {(tabStyle!==undefined && selectedTabStyle===undefined) && tabs.map((tab,index)=>{         
          return (          
          <div key={index} className={`col-lg-3 col-md-4 col-sm-9`} style={tab.selected?style.selectedTab:propTabStyle} onClick={()=>handleTabSelection(index)}>
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
