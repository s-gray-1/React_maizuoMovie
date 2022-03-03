import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'
import {connect} from 'react-redux'
class App extends Component {
  state = {
    isShow:true
  }
  // store.subscribe 订阅
  componentDidMount() { 
  //  console.log(this.props);
  }
  render() {
    return (
      <div>
         <MRouter>
          {this.props.isShow && <Tabbar></Tabbar>} 
         </MRouter>
          
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    a:1,
    b:2,
    isShow:state.tabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)
/* 
  films ===>Films
  cinemas ===>Cinemas

*/