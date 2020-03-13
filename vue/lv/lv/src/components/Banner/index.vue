<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide outter"
          v-for="(item,index) in list"
          :key="index"
          :style="{backgroundImage: 'url( '+ item +')',backgroundRepeat:'no-repeat',backgroundSize:'268%',backgroundPosition:'50%'}"
        >
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      list: [
        "https://www.hksasa.cn/media/design/commerce/kvimage/Promo-1-PC0225.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/lorealPromo-1-PC.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/Promo-1-PC0204.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/pc_promo1d0210.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/md_pc_promo1_20200210.jpg"
      ]
    };
  },
  methods: {
    initBanner() {
      new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  //用watch监听banners改变，banners改变的话表示网络请求数据成功
  mounted() {
    this.initBanner();
  }
};
</script>
  <style scoped lang='less'>
@import "../../style/index.less";
.swiper-container {
  width: 100%;
  .h(220);
  .swiper-slide {
    width: 100%;
    .h(220);
    background-size: 20%;
    position: relative;
    .swiper-pagination {
      bottom: 10px;
      display: flex;
      position: absolute;
      left: 40%;
    }
  }
}
</style>

<style >
.swiper-pagination-bullet {
  margin-right: 10px;
  background-color: white;
}
.swiper-pagination-bullet-active {
  background-color: rgb(231, 112, 112);
}
</style>