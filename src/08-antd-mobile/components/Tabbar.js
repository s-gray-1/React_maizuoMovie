import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Badge, TabBar } from 'antd-mobile'
import style from '../css/active.module.css'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
class KerwinTabbar extends Component {
tabs = [
    {
      key: '/films',
      title: '电影',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />,
    
    },
   
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  
  render() {
    return (
      <div className={style.tabbar}>
     
     <TabBar onChange={(value)=>{
       this.props.history.push(value)
     }} activeKey={'/'+this.props.location.pathname.split("/")[1]}>
          {this.tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
      </TabBar>
          
          
        
      </div>
    )
  }
}
export default withRouter(KerwinTabbar)