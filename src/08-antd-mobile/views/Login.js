import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={()=>{
          localStorage.setItem("token","Bear xxx")
          this.props.history.push('/center')
        }}>登录</button>
      </div>
    )
  }
}
