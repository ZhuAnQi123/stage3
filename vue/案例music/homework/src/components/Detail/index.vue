<template>
  <div class="detail">
    <!-- 头部导航 -->
    <div class="top">
      <span @click="back">back</span>
      <span>{{name}}</span>
    </div>

    <!-- 头像 -->
    <div class="avator" :style="{'background-image':`url(${avator})`}" ref="img">
      <div class="shadow"></div>
    </div>

    <!-- 歌曲列表 -->
    <div class="songlist" ref="wrapper">
      <div class="content">
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="openPlay(index)">
            <h2>{{item.songname}}</h2>
            <p>{{name}}.{{item.albumname}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BS from "better-scroll";
import { getSongByMid, getSongUrlByMid } from "api/api.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      list: [], //放的是歌曲列表信息
      name: "暂无数据",
      avator: ""
    };
  },
  methods: {
    ...mapMutations(["addSongList", "changeCurrendIndex", "changeScreen"]),
    // 回退上一页
    back() {
      this.$router.go(-1);
    },
    //vuex开始播放时的方法
    openPlay(index) {
      // 点击歌的li 显示播放器。传入要播放的歌曲列表this.list
      this.addSongList(this.list);
      // 确定点击的是那首歌。传入下标.
      this.changeCurrendIndex(index);
      // 点击屏幕变大
      this.changeScreen(true);
    },
    //上拉和下滑列标页面变化
    initBs() {
      // 拿到img和wrapper节点
      let img = this.$refs.img;
      let wrapper = this.$refs.wrapper;
      let imgH = img.clientHeight;
      this.bs = new BS(wrapper, { probeType: 3, click: true });
      this.bs.on("scroll", ({ y }) => {
        if (y >= 0) {
          //01下拉放大
          let precent = 1 + y / imgH;
          img.style.transform = `scale(${precent})`;
          img.style.zIndex = 1;
        } else {
          //02向上滚动
          if (Math.abs(y) > imgH - 40) {
            // 到达顶部额时候 图片的层级高
            img.style.zIndex = 1;
            img.style.paddingTop = "0%";
            img.style.height = "40px";
          } else {
            // 没有到顶部 滚动层的层级高
            img.style.zIndex = -1;
            img.style.paddingTop = "70%";
            img.style.height = 0;
          }
        }
      });
    },
    //传入此页曲目信息。
    // 其中有用的信息传到 result 数组中
    // 其中获取音乐地址的放在数组 mids 中
    //不能一起装是因为 mids 中是歌曲的媒体id，后续拼成完整音乐地址再加入
    handleList(list) {
      let result = [];
      let mids = [];
      result = list.map((item, index) => {
        let { albummid, albumname, singer, songmid, songname } = item.musicData;
        let albumUrl = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`;
        mids.push(songmid);
        return { albummid, albumname, singer, songmid, songname, albumUrl };
      });
      return { result, mids };
    }
  },
  //数据的处理在生命周期的created，异步加async
  async created() {
    //在以挂载在vue实例上路由的参数中取出singermid
    let { singermid } = this.$route.params;
    // 根据歌手mid 发起请求获取数据
    let data = await getSongByMid(singermid);
    let { result, mids } = this.handleList(data.data.list);
    // 通过接口将 mids 歌曲的媒体id 换成完整的音乐地址后将数据进行合并
    let { urls } = await getSongUrlByMid(mids);
    let finalData=[]
    for (let index = 0; index < result.length; index++) {
      result[index].audioUrl = urls[index];
      if(urls[index]){
      // 将不能播放的歌曲去除.而请求到的便放在finalData
       finalData.push(result[index])
     }
    }

    //将处理好的信息挂载到实例上
    this.list = finalData;
    this.name = data.data.singer_name;
    this.avator = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${singermid}.jpg?max_age=2592000`;
   //数据请求完整之后initBs
   this.$nextTick(() => {
      this.initBs();
    });
  }
};
</script>
<style lang="less" scoped>
@import '../../style/index.less';
.detail{
  position: fixed;
  top: 0px;
  bottom: 0px;
  background: #222;
  left:0px;
  right: 0px;
  // 头部
  .top{
    height: 40px;
    color: #fff;
    position: absolute;
    top:0;
    z-index: 3;
  }
  // 头像
  .avator{
    .w(375);
    padding-top: 70%;
    background-size:cover; 
    position: absolute;
    top: 0px;
    z-index: -1;
    .shadow{
      position: absolute;
      top: 0;
      background: rgba(7,17,27,0.3);
      width: 100%;
      height: 100%;
    }
  }
  // 歌曲列表
  .songlist{
   position: fixed;
   background: #222;
  //  overflow: hidden;
   top:270px;
   bottom: 0px;
   left:0;
   right: 0;
   .content{
     padding: 10px 30px;
     background: #222;
     li{
       font-size: @fs-s;
       color: #fff;
       height: 61px;
       h2{
        height: 20px;
       }
       p{
        margin-top:3px; 
        height:20px ;
       }
     }
   }
  }
}
</style>