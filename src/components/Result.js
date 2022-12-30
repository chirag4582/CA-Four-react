import React from 'react'

function Result(props) {
const Reload = ()=>{
  window.location.reload()
}

  return (
    <div style={{backgroundColor:'greenyellow',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{opacity:'0.8',borderRadius:'10px'}} className="container" >
        <h1 style={{fontSize:'4.5em'}}>Final Results</h1>
        <h4 style={{fontSize:'2em'}} >{props.apple}{' '}out of 5 corect - {(props.apple/5)*100}%</h4>
        <button onClick={()=>Reload()} >  RESTART GAME</button>
      </div>
    </div>
  )
}

export default Result
