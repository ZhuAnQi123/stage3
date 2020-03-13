<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- 后面要固定写:key="index" -->
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
          <!-- axios请求的网页数据中，picUrl为轮播图的路径 -->
          <img :src="item.picUrl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: {
    //可以对象也可以用数组。这里写对象，type为数组，默认值default为空
    banners: { type: Array, default: [] }
  },
  methods: {
    initBanner() {
      new Swiper(".swiper-container", {});
    }
  },
  //用watch监听banners改变，banners改变的话表示网络请求数据成功
  watch: {
    //监听下面放key：value，当两个值一样时可简写成一个
    banners() {
      //banners 改变 网络请求数据ok 之后进行初始化操作
      this.$nextTick(() => {
        this.initBanner();
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../style/index.less";
@import "~swiper/css/swiper.min.css";
.swiper-container {
  .w(375);
  .h(150);
  background: green;
  img {
    .w(375);
    .h(150);
  }
}
</style>