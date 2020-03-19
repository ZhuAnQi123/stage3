import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    //存放购物车商品数组
  },

  mutations: {
    // 修改全局状态值 下面是修改stage中的值
    函数名(state, params) {

    },
  },

  getters: {
    //对stage中的值计算
    double(state) {
      return state.变量名 * 2
    }
  },

  actions: {
    //触发mutation。 解构方法let {commit} = context 
    changeAgeAction({ commit }, params) {
      // 通过commit函数触发mutation中的changeName函数
      commit('changeName', params)
    }
  }
})
export default store;
