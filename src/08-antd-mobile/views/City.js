import React, { useState } from 'react'
import { connect } from 'react-redux';
// import store from '../redux/store';

function City(props) {
  const [list] = useState(["北京","上海","深圳","广州"]);
  return (
    <div>
      City
      <ul>
        {
          list.map(item=>
            <li key={item} onClick={()=>{
            /*   store.dispatch({
                type:"change-city",
                payload:item
              }) */
              // props.history.push("/Cinemas")
              props.change(item)
              props.history.goBack()
            }}>{item}</li>
            )
        }
      </ul>
    </div>
  )
}
const mapDispatchToProp = {
  change(item){
    return {
      type:"change-city",
      payload:item
    }
  }
}
export default connect(null,mapDispatchToProp)(City) 