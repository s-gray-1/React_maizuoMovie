import React from "react";
import ReactDOM from "react-dom";
import {store,persistor} from './08-antd-mobile/redux/store'
// import 'antd/dist/antd.css'
import App from './08-antd-mobile/App'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'



// ReactDOM.render(<div>
//   <b>1111</b>
//   <ul>
//     <li>1111</li>
//     <li>1111</li>
//     <li>1111</li> 
//     <li>1111</li>
//     <li>1111</li>
//   </ul>
// </div>,document.getElementById('root'))

/* ReactDOM.render(
  React.createElement("div",
  {id:'aaa',
  class:"bbb"
},"1111111"),document.getElementById('root'))  */
// jsx==js+xml

ReactDOM.render(
 <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App></App>
  </PersistGate>
</Provider>


,document.getElementById("root"))