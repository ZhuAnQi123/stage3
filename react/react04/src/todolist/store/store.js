import {createStore,combineReducers} from 'redux'

// combineReducers redux 中实现模块化
//将子Reducer 合并为一个大的函数，产生一个整体的 Reducer 函数。
//该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State 对象。
// applyMiddleware 和react-redux

import todolist from './reducer' 
//todolist是一个随便起的名
let reducer = combineReducers({todolist})
export default createStore(reducer)