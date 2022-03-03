import axios from 'axios';
import { Image, List,InfiniteScroll } from 'antd-mobile'
import React ,{useEffect,useRef,useState}from 'react'
import {useHistory,withRouter} from 'react-router-dom'
export default function NowPlaying(props) {
  const [list, setlist] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const count =useRef(0)
  const history=  useHistory()
  /* useEffect(() => {
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6887780",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16455458346017545534439425","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data.data.films);
      setlist(res.data.data.films)
    })

  }, []); */
const handelChangePage=(id)=>{
    console.log("click");
    // window.location.href="#/detail/"+id
    // props.history.push(`/detail/${id}`)
    // 1动态路由传参方案
    history.push(`/detail/${id}`)
    // 2 query传参
    // history.push({pathname:'/detail',query:{id:id}})
    // 3 state 传参
    // history.push({pathname:'/detail',state:{id:id}})

  } 
  const loadMore=()=>{
    console.log("到底了");
    count.current++
    sethasMore(false)
    axios({
      url:`https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=6887780`,
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16455458346017545534439425","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data.data.films);
      setlist([...list,...res.data.data.films])
      sethasMore(res.data.data.films.length>0)
    })

  }
  return (
    <div>
      
       <List>
           {list.map(item => (
             <List.Item
              onClick={()=>handelChangePage(item.filmId)}  
               key={item.filmId}
               prefix={
                 <Image
                   src={item.poster}
                  //  style={{ borderRadius: 20 }}
                  //  fit='cover'
                   width={80}
                  //  height={40}
                 />
               }
               description={
                 <div>
                   {
                     item.grade?<div>观众评分:{item.grade}</div>:
                     <div style={{visibility:"hidden"}}>观众评分:</div>
                   }
            
                  <div>主演: {item.actors.map((i,index)=><span key={index}>{i.name} </span>)}</div>
                  <div>{item.nation}|{item.runtime}分钟</div>
                 </div>
               }
             >
               {item.name}
             </List.Item>
           ))}
       </List>
       <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
