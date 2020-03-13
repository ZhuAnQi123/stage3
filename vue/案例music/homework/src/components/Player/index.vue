
<template>
  <div class='player' v-if='songList.length'>
    
    <div v-if='fullScreen' class='big'>
    <!-- 头部 -->
     <div class='top'> 
       <span @click='changeScreen(false)'>v</span>
       {{currentSong.songname}}
     </div>
     <!-- 背 景 -->
     <div class='bg'>
       <img :src="currentSong.albumUrl" alt="">
     </div>
     <!-- 歌手 -->
     <p class='name'>{{currentSong.singer[0].name}}</p>
     <!-- 专辑图片 -->
     <div class='img'>
       <img :class='cd' :src="currentSong.albumUrl" alt="">
     </div>
     <!-- 播放 -->
     <button @click='togglePlay'>播放</button>
     <button @click='next'>下一曲</button>
     <!-- 播放器 -->
     <audio ref='audio' 
            @canplay='canplay'
            controls :src='currentSong.audioUrl'></audio>
    </div>
    <div v-else 
    class='small'
    @click='changeScreen(true)'
    >
      小屏
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      play: false
    };
  },
  computed: {
    ...mapState(["songList", "fullScreen"]),
    ...mapGetters(["currentSong"]),
    //控制歌曲的开始与暂停，在样式中有两个class名
    //当class名只有cd时，图片转动。既有paused又有cd时暂停
    //  & .cd{
    //   animation: rotate 10s linear infinite;
    // }
    // & .paused{
    //   animation-play-state: paused;
    // }
    cd() {
      return this.play ? "cd" : "cd paused";
    }
  },
  methods: {
    ...mapMutations(["changeScreen", "nextCurrendIndex"]),
    //点击改变暂停开始状态

    //有的歌曲需要版权，请求不到，不能播放。以下是判断
    // 有的话将它挂在this实例上，叫audio
    canplay() {
      this.audio = this.$refs.audio;
    },
    togglePlay() {
      this.play = !this.play;
    },
    //下一曲
    next() {
      this.nextCurrendIndex()
    }
  },
  watch:{
    //newValue,oldValue是自带的参数
     play(newValue,oldValue){
       //如果this上没有audio，data上的play返回false
      if(!this.audio) return false 
      if(newValue){
        //👇audio的自定义事件，如果有新值传入就播放
        this.audio.play()
      }else{
        //一开始设置是false
        this.audio.pause()
      }
    }
  }
};
</script>



<style lang="less" scoped>
@import "~style/index.less";
.player {
  color: #fff;
  .big {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    background: #222;
    .top {
      font-size: @fs-l;
      text-align: center;
    }
    .name {
      font-size: @fs-s;
      text-align: center;
      padding: 10px;
    }
    .bg {
      position: absolute;
      z-index: -9;
      top: 0px;
      width: 100%;
      height: 100%;
      filter: blur(15px);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img {
      text-align: center;
      // background: red;
      .w(375);
      padding: 20px;
      box-sizing: border-box;
      img {
        width: 85%;
        border-radius: 50%;
        border: 10px solid #ccc;
      }
      & .cd {
        animation: rotate 10s linear infinite;
      }
      & .paused {
        animation-play-state: paused;
      }
    }
  }
  .small {
    position: fixed;
    .w(375);
    bottom: 0px;
    height: 80px;
    background: lightgreen;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>