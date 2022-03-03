import axios from "axios";

// redux-thunk 风格
/* function getCinemaListAction(){
 
  return (dispatch)=>{
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=820614",
      method:'get',
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16455458346017545534439425","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data.data.cinemas);
      dispatch({
        type:"change-list",
        payload:res.data.data.cinemas
      })
    })
  
  }
}
 */
// redux-promise
async function getCinemaListAction(){
 
  var res = await axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=820614",
      method:'get',
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16455458346017545534439425","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
  return {
      type:"change-list",
      payload:res.data.data.cinemas
  }
  
}

export default getCinemaListAction