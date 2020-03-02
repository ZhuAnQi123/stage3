<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- 在循环的时候，给每一项循环加上一个不一样的key值，就不会报错 -->
      <div class="swiper-slide" v-for="(item,index) in list" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
//先npm安装swiper-->引入安装的第三方模块--->再引入样式
import Swiper from "swiper";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    initBanner() {
      var mySwiper = new Swiper(".swiper-container", {});
    }
  },
  created() {
    setTimeout(() => {
        //规顶1000ms之后再给list赋值
      this.list = [1, 2, 3];
      //由于初始化的时候dom元素还没有异步更新完。使用this.$nextTick
      this.$nextTick(() => {
        this.initBanner();
      });
    }, 1000);
  }
};
</script>

<style>
/* 引入模块的css，前面加一个 ~ ，因为引入的是模块不是文件夹*/
@import "~swiper/css/swiper.min.css";
.swiper-container {
  width: 600px;
  height: 300px;
  background: red;
}
</style>