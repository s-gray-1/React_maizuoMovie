import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction"
function Cinemas(props) {
  let{list,getCinemaListAction,cityName} = props
  useEffect(() => {

    if(list.length===0){
      // 去后台取数据
      // actionCreator里写异步
     getCinemaListAction()
    }else{
      console.log("store缓存");
    }
  }, [list,getCinemaListAction]);
  
  
  
  return (
    <div>
      {/* <div style={{overflow:"hidden"}}>
        <div style={{float:"left"}} onClick={()=>{
          props.history.push('/city')
        }}>{cityName}</div>
        <div style={{float:"right"}}  onClick={()=>{
          props.history.push('/cinemas/search')
        }}>搜索</div>
      </div> */}
        <NavBar right={<SearchOutline onClick={()=>{
          props.history.push('/cinemas/search')
        }}></SearchOutline> } left={<div onClick={()=>{
          props.history.push('/city')
        }}>{props.cityName}</div> } back={null}>
          影院
        </NavBar>
      
       {
            list.map(item=>
              <dl key={item.cinemaId} style={{padding:"10px"}}>
                <dt>{item.name}</dt>
                <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
              </dl>
              
            )
          }
      
      </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    list:state.cinemaListReducer.list,
    cityName:state.cityReducer.cityName
  }
}
const mapDispatchProps={
  getCinemaListAction
}
export default connect(mapStateToProps,mapDispatchProps)(Cinemas)