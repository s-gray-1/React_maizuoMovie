import React, { Component } from 'react'
import axios from 'axios'
export default class Comingsoon extends Component {
  componentDidMount() { 
    axios.get("/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=5A75B140989E11EC98E99522608FE2BC4411C388DEF24D098EDDC98599E5809A&optimus_risk_level=71&optimus_code=10").then(res=>{
      console.log(res);

    })
   }
  render() {
    return (
      <div>Comingsoon</div>
    )
  }
}
