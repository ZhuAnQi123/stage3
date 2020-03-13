<template>
  <div class="secondClassification">
    <ul class="switch">
      <li>
        官方微博
        <span></span>
      </li>
      <li>
        官方微信
        <span></span>
      </li>
      <li>
        官方小程序
        <span></span>
      </li>
    </ul>
    <div class="QRcode">
      <img src="../../assets/eqcode.jpg" />
      <p>欢迎关注我们官方微信</p>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul>
        <li v-for="(item,index) in secondData" :key="index" @click="jumpDetails(item.id)">
          <span>{{item.name}}</span>
          <span class="iconfont">&#xe61c;</span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BS from "better-scroll";
export default {
  props: ["secondData"],
  methods: {
    jumpDetails(id) {
      this.$router.push(`/classification/:${id}`);
    },
    initBs() {
      let wrapper = this.$refs.wrapper;
      this.BS = new BS(wrapper, {
        probeType: 3,
        click: true,
        scrollY: true,
        pullUpLoad: true
      });
    }
  },
  created() {
    this.$nextTick(() => {
      this.initBs();
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.secondClassification {
  background-color: rgb(246, 246, 246);
  .switch {
    .h(50);
    .l_h(50);
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    justify-content: space-between;
    background-color: white;
    border-radius: 0;
    li {
      .f_z(17);
      .f_z(15);
      position: relative;
      span {
        position: absolute;
        .w(40);
        height: 2px;
        left: 10px;
        display: block;
        .t(43);
      }
      .active {
        background-color: hotpink;
        color: hotpink;
      }
    }
  }
  .QRcode {
    width: 95%;
    background-color: white;
    .h(230);
    border-radius: 5px;
    margin: auto;
    margin-bottom: 10px;
    img {
      .w(96);
      .h(96);
      .m_t(25);
      margin-bottom: 10px;
      margin-left: 35%;
    }
    p {
      .l_h(15);
      .f_z(15);
      text-align: center;
    }
  }
  .wrapper {
    width: 100%;
    .h(320);
    overflow: hidden;
    ul {
      margin: auto;
      background-color: white;
      width: 95%;
      border-radius: 9px;
      li {
        .h(46);
        width: 100%;
        border-bottom: 1px solid rgb(246, 246, 246);
        span {
          .f_z(14.4);
          .l_h(46);
          .h(46);
          padding: 0 15px;
          display: block;
          float: left;
        }
        .iconfont {
          .l_h(46);
          .h(46);
          float: right;
        }
      }
    }
  }
}
</style>