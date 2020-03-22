import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    cartArr: [],
  },

  mutations: {
    // 修改全局状态值 下面是修改stage中的值
    putIn(state, obj) {
      if (state.cartArr.length) {
        for (let i = 0; i < state.cartArr.length; i++) {
          if (obj.name == state.cartArr[i].name) {
            console.log('已存在');
            state.cartArr[i].num++;
          } else {
            console.log('新商品');
            state.cartArr.push(obj)
          }
        }
      } else {
        state.cartArr.push(obj)
      }

    },
  },

  actions: {
    //触发mutation。 解构方法let {commit} = context 

  }
})

export default store