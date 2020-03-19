<template>
  <div class="details">
    <div class="header">
      <p class="iconfont back" @click="goBack()">＜</p>
      <h2>商品</h2>
      <p class="iconfont home" @click="goHome()">&#xe625;</p>
    </div>
    <div class="swiper"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.details {
  position: fixed;
  .t(-57.6);
  left: 0px;
  bottom: 0;
  right: 0px;
  background-color: white;
  .header {
    .h(44);
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
    .iconfont {
      .h(35);
      .l_h(35);
      .w(35);
      color: chocolate;
    }
    .back {
      .f_z(35);
      float: left;
    }
    .home {
      .f_z(25);
      float: right;
    }
    h2 {
      .f_z(22);
      .l_h(35);
      float: left;
      margin-left: 30%;
    }
  }
}
</style>