import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from './store/actionCreator';
class Son1 extends Component {

  render() {
    //利用connect中的参数mapStateToProps将原来的state放在this.props中了
    let { name, age } = this.props
    return (
      <div>
        <h3>大儿子</h3>
        {name}
        {age}
        <button onClick={() => {
          //利用connect中的参数mapDispatchToProps 将原来的方法放在this.props中了
          this.props.CHANGE_NAME()
        }}>改名</button>
      </div>
    );
  }
}

// 下面这里标准写就ok
export default connect(state => state, (dispatch) => {
  return bindActionCreators(actionCreator, dispatch)
})(Son1);