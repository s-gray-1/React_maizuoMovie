import React,{useState,useEffect,useMemo} from 'react'
import {store} from '../redux/store';
import { Button, SearchBar, Space, Toast } from 'antd-mobile'
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction"
export default function Search(props) {
  const [mytext, setmytext] = useState("");
  const [cinemaList,setcinemaList] = useState(store.getState().cinemaListReducer.list);
  useEffect(() => {
    if(store.getState().cinemaListReducer.list.length===0){
      // 去后台取数据
      // actionCreator里写异步
      store.dispatch(getCinemaListAction())
    }else{
      console.log("store缓存");
    }
  //  订阅
  var unsubscribe =  store.subscribe(()=>{
    console.log("cinema订阅",store.getState().cinemaListReducer.list);
    setcinemaList(store.getState().cinemaListReducer.list)
  })
  return ()=>{
    // 取消订阅
    unsubscribe()
  }
  }, []);
  
  const getCinemaList = useMemo(() =>cinemaList.filter(item=>item.name.toUpperCase().includes(mytext.toUpperCase())
  ||item.address.toUpperCase().includes(mytext.toUpperCase())
 ), [cinemaList,mytext])
  
  
  return (
    <div>
        {/* <input value={mytext} onChange={(evt)=>{
            setmytext(evt.target.value)
          }}/> */}
       <div style={{padding:"10px"}}>
        <SearchBar placeholder='请输入内容' showCancelButton={() => true} value={mytext} onChange={(value)=>{
            setmytext(value)
          }}/>
       </div>
       {
            getCinemaList.map(item=>
              <dl key={item.cinemaId} style={{padding:"10px"}}>
                <dt>{item.name}</dt>
                <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
              </dl>
              
            )
          }
      
      </div>
  )
}
