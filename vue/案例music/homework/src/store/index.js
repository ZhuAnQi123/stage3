//用vuex把方法单独放在这里

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {//下面mutation要用的参数
        songList: [], //要播放的歌曲列表
        fullScreen: true, //大屏小屏
        loop: 0,  // 0 不循环 1 单曲 2 顺序 3 随机
        currentIndex: -1 //当前正在播放那首歌 
    },
    mutations: {
        //控制屏幕大小切换
        changeScreen(state, screenState) {
            state.fullScreen = screenState
        }
        , addSongList(state, params) {
            // params 要播放的歌曲列表
            state.songList = params
        }, changeCurrendIndex(state, index) {
            // 修改当前正在播放那首歌
            state.currentIndex = index
        },
        nextCurrendIndex(state) {
            //点击下一首歌曲时获取列表总长
            let count = state.songList.length
            if (state.songList.currentIndex < count - 1) {
                state.currentIndex++
            } else {
                //大于列表总长时回到第一首
                state.currentIndex = 0
            }
        },
        prevCurrendIndex(state) {
            let count = state.songList.length
            if (state.currentIndex > 0) {
                state.currentIndex--
            } else {
                //下标小于0时又回到最后一首
                state.currentIndex = count - 1
            }
        },
        //播放模式改变---0 不循环 1 单曲 2 顺序 3 随机
        //一直点击这个按钮切换就0123的循环
        changeLoop(state){
            if(state.loop==3){
                state.loop=0
              }else{
                state.loop++
              }
        }
    },
    getters: {
        currentSong(state) {
            //返回当先正在播放的歌
            return state.songList[state.currentIndex] || null
        }
    }
})

export default store
