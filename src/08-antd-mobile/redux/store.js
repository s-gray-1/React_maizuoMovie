// 1 引入redux
// 2 createStore(reducer)
import cityReducer from './reducers/CityReducer'
import tabbarReducer from './reducers/TabbarReducer'
import cinemaListReducer from './reducers/CinemaListReducer'
import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const reducer=combineReducers({
  cityReducer,
  tabbarReducer,
  cinemaListReducer
})
const persistConfig = {
  key: 'kerwin',
  storage,
  whitelist:["cityReducer"]
}

const persistedReducer = persistReducer(persistConfig, reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))
let persistor = persistStore(store)
// const store = createKerwinStore(reducer)

/* store.dispatch
store.subscribe
store.getState */

// 简易版redux源码手写
/* function createKerwinStore(reducer){
  var list=[]
  var state = reducer(undefined,{})
  function subscribe(callback){
    list.push(callback)
  }
  function dispatch(action){
    state = reducer(state,action)
    for(var i in list){
      list[i]&&list[i]()
    }
  }
  function getState(){
    return state
  }
  return {
    subscribe,
    dispatch,
    getState
  }
} */
export {store,persistor}
/* var obj = {
  myname:"kerwin"
}
function test(obj){
  obj.myname = "xiaoming"
  return obj
}
test(obj) 浅复制 影响原状态

纯函数：
  1.对外界没有副作用
  2.同样的输入得到同样的输出


 */