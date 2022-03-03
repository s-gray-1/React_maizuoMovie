import React,{useEffect} from 'react'

function NotFound(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>NotFound</div>
  )
}
function kerwinconnect(cb,obj){
  var value=cb()
  return (MyComponent)=>{
    return (props)=>{
      console.log(props);
      return(
        <div style={{color:"red"}}>
        <MyComponent {...value} {...props} {...obj}></MyComponent>
      </div>
      )
    }
  }
}
export default kerwinconnect(()=>{
  return {
    a:1,
    b:2
  }
},{
  aa(){},
  bb(){}
})(NotFound)