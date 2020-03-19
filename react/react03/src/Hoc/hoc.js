// 高阶组件就是一个函数 
//接受一个组件作为参数一个组价作为参数 返回一个新的组件
//用于处理相似度高的组件
import React, { Component, Fragment } from 'react';
export default (TmpComponent) => {
  // 创建一个新的组件
  class NewComponent extends Component {
    constructor() {
      super()
      this.state = {
        name: '数据加载ing'
      }
    }
    componentDidMount() {
      setTimeout(() => {
        let name = localStorage.getItem('name')
        this.setState({ name })
      }, 1000)
    }
    render() {
      return (
        //TmpComponent：参数传递的组件，使外面可以通过this.props接受
        <Fragment>
          <TmpComponent name={this.state.name}></TmpComponent>
        </Fragment>
      );
    }
  }
  // 返回创建的新组件 
  return NewComponent
}