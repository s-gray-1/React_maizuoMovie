
import React,{ useEffect} from 'react'
import {connect} from 'react-redux'
import {hide,show} from '../redux/actionCreator/TabbarActionCreator'
function Detail(props) {
  let {show,hide,match}=props
  // 1 动态路由传参
  console.log(props.match.params.myid);
  // 2 query传参
  // console.log(props.location.query.id);
  // 3 state传参
  // console.log(props.location.state.id)
  useEffect(() => {
    // console.log("create");
    // store.dispatch 通知
   hide()
    return () => {
      console.log("destroy");
      // store.dispatch(show())
    show()
    };
  }, [match.params.myid,show,hide]);
  return (
    <div>Detail</div>
  )
}
const mapDispatchToprops = {
  show,
  hide
  
}
// connect(将来给孩子传的属性，将来给孩子传的回调函数)
export default connect(null,mapDispatchToprops)(Detail)