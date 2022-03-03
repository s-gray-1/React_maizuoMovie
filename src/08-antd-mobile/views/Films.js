import React, { Component } from 'react'
import { Route,Redirect,Switch,NavLink } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import Comingsoon from './films/Comingsoon'
import  style from  './css/Film.module.css'
import {  Swiper,Tabs} from 'antd-mobile'
import axios from 'axios'
import { value } from 'dom7'
export default class Films extends Component {
  state={
    loopList:[]
  }
  componentDidMount() { 
    axios({
      url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=3868440",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16455458346017545534439425","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res=>{
      // console.log(res.data.data);
       this.setState({
         loopList:res.data.data
       })
      
    })

   }
  render() {
    return (
      <div className={style.film}>
        {/* <div style={{height:"200px",background:"yellow" }}>大轮播</div> */}
         <Swiper autoplay={true} loop={true}>
          {
            this.state.loopList.map(item=>
              
              <Swiper.Item key={item.bannerId}>
                <img src={item.imgUrl} alt={item.name} style={{width:"100%"}}></img>
              </Swiper.Item>  )
          }
           
           
        </Swiper>
        {/* <ul>
          <li>
            <NavLink to="/films/nowplaying" activeClassName={style.kerwinactive} id="kerwin">正在上映</NavLink>
          </li>
          <li>
            <NavLink to="/films/commingsoon"activeClassName={style.kerwinactive}>即将上映</NavLink>
          </li>
        </ul> */}
        <div style={{position:"sticky",top:0,background:"white"}}>
          <Tabs onChange={(value)=>{
            console.log(value);
            this.props.history.push(value)
          }} activeKey={this.props.location.pathname}>
            <Tabs.Tab title='正在热映' key='/films/nowplaying'>
            </Tabs.Tab>
            <Tabs.Tab title='即将热映' key='/films/commingsoon'>
            </Tabs.Tab>
          </Tabs>
        </div>
        {/* 路由配置嵌套路由 */}
        <Switch>
          <Route path="/films/nowplaying" component={NowPlaying}></Route>
          <Route path="/films/commingsoon" component={Comingsoon}></Route>
          <Redirect from="/films" to="/films/nowplaying"></Redirect>
        </Switch>
      </div>
    )
  }
}
