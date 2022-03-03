import React, { Component } from 'react'
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import Films from '../views/Films'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'
function isAuth(){
  return localStorage.getItem("token")
}

// BrowserRouter没有#的路径 好看 真正朝后端发请求要页面 后端没有对应的路径处理路径 就会404 不好看
export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          {this.props.children}
          <Switch>
            <Route path="/films" component={Films}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/cinemas" component={Cinemas} exact></Route>
            <Route path="/cinemas/search" component={Search}></Route>
            {/* <Route path="/center" component={Center}></Route> */}
            <Route path="/center" render={(props)=>{
              return isAuth() ? <Center></Center>:<Redirect to="/login" ></Redirect>
              }}></Route>

            <Route path="/login" component={Login}></Route>
            {/* 1 动态路由 */}
            <Route path="/detail/:myid" component={Detail}></Route>
            {/* 2 query传参 */}
            {/* <Route path="/detail" component={Detail}></Route> */}

            {/* 模糊匹配 */}
            <Redirect from="/" to="films" exact></Redirect>
            {/* 精确匹配 exact*/}

            <Route component={NotFound}></Route>
          </Switch>
        </Router>   
      </div>
    )
  }
}

/* 
  films ===>Films
  cinemas ===>Cinemas

*/