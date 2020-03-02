<template>
  <div class="recommend">
    <!-- 从这里开始下面是整个滚动区 -->
    <div class="wrapper" ref="wrapper">
      <!-- 👆容器层，👇内容层。名字随意。只有容器层的第一个子元素为内容层，其他无效 -->
      <div class="content">
        <!-- 轮播图 -->
        <banner :banners="list"></banner>
        <!-- 歌曲列表 -->
        <div class="title">歌曲推荐列表</div>
        <ul class="list">
          <li v-for="(item,index) in recommendList" :key="index">
            <div class="left">
              <!-- <img :src="item.imgurl" alt=""> -->
              <img v-lazy="item.imgurl" alt />
            </div>
            <div class="right">
              <p class="name">{{item.creator.name}}</p>
              <p class="album">{{item.dissname}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../Banner";
import BS from "better-scroll";
import { getBannerData, getRecommendData } from "../../api/api";

export default {
  components: { Banner },
  data() {
    return {
      list: [],
      recommendList: []
    };
  },
  methods: {
    initBs() {
      //1 ref 加在普通的元素上，用this.ref.name 获取到的是dom元素
      //2、ref 加在子组件上，用this.ref.name 获取到的是组件实例，可以使用组件的所有方法。
      let wrapper = this.$refs.wrapper;
      //第二个参数他是一个配置项，什么都没有就{}
      new BS(wrapper, {});
    }
  },
  mounted() {
    this.initBs();
    getBannerData()
      .then(res => {
        console.log("ok", res);
        //res.data.slider是axios请求数据中的轮播图信息
        this.list = res.data.slider;
      })
      .catch(err => {
        console.log("err :", err);
      });
    getRecommendData().then(res => {
      this.recommendList = res.data.list;
    });
  }
};
</script>
<style lang="less" scoped>
@import "../../style/index.less";
.recommend {
  .wrapper {
    position: fixed;
    top: 88px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    .content {
      .w(375);
      .title {
        .w(375);
        height: 65px;
        text-align: center;
        line-height: 65px;
        font-size: @fs-s;
        color: @yellow;
      }
      .list {
        li {
          .w(375);
          height: 82px;
          box-sizing: border-box;
          padding: 0px 20px 20px 20px;
          // border: 1px solid red;
          display: flex;
          .left {
            width: 82px;
            height: 60px;
            img {
              width: 60px;
              height: 60px;
            }
            // background: pink;
          }
          .right {
            color: #fff;
            font-size: @fs-s;
          }
        }
      }
    }
  }
}
</style>