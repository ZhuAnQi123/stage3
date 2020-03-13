<template>
  <div class="tab">
    <!-- 默认的选中状态不用写js，直接添加属性active-class就可以 -->
    <!-- 注意默认这里就不用再加homepage了，直接默认路径 -->
    <router-link to="/" tag="div" active-class="active" exact>
      <span class="iconfont">&#xe625;</span>
      <span>首页</span>
    </router-link>
   <router-link to="/classification" tag="div" active-class="active" >
      <span class="iconfont">&#xe7f9;</span>
      <span>分类</span>
      </router-link>
    <router-link to="/hot" tag="div" active-class="active">
      <span class="iconfont">&#xe7c4;</span>
      <span>特卖</span>
    </router-link>
    <router-link to="/cart" tag="div" active-class="active">
      <span class="iconfont">&#xf0179;</span>
      <span>购物车</span>
    </router-link>
    <router-link to="/my" tag="div" active-class="active">
      <span class="iconfont">&#xe612;</span>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    attachDad() {
      this.$emit("popout");
    }
  }
};
</script>


<style scoped lang='less'>
@import "../../style/index.less";
.tab {
  width: 10rem;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  background-color: #fff;
  right: 0;
  .h(50);
  div {
    height: 100%;
    width: 20%;
    float: left;
    span {
      display: block;
      width: 100%;
      .h(15);
      .l_h(15);
      .f_z(15);
      text-align: center;
    }

    .iconfont {
      width: 100%;
      .l_h(38);
      font-weight: 500;
      .h(30);
      .f_z(20);
    }
  }
  .active {
    span {
      color: hotpink;
    }
  }
}
</style>