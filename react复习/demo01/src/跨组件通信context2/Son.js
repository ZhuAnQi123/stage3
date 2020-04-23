import React, { Component } from 'react';
import {NameContext} from './NameContext'
class Son extends Component {
  state={
   style:{
     width:"100px",
     height:'100px',
     background:'red'
   }
  }
   render() { 
    return (
     <NameContext.Consumer>
       {/* 回调函数的参数就是父组件provider提供的数据 */}
       {({name,toggleName})=>{
        //  console.log(value)
         return(
          <div style={this.state.style}>
            <h1>Son Consumer</h1>
            {name}
            <button onClick={()=>{
              toggleName('贞子')
            }}> 改名</button>
          </div>
         )
       }}
     </NameContext.Consumer>
      );
  }
}
 
export default Son;