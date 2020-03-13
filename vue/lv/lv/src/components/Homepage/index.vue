<template>
  <div class="tab">
    <div class="header">
      <span class="iconfont">&#xe60b;</span>
      <h2>毕设电商网</h2>
    </div>
    <div class="serch" >
      <input type="text" placeholder="面霜" />
      <span class="iconfont">&#xe7a8;</span>
    </div>
    <Banner></Banner>
    <Billboard></Billboard>
    <Midgoods></Midgoods>
  </div>
</template>

<script>
import Banner from "../Banner";
import Billboard from "../Billboard";
import Midgoods from "../Midgoods";

export default {
  components: { Banner ,Billboard,Midgoods}
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.tab {
  .header {
    padding: 10px 0 0 10px;
    width: 100%;
    box-sizing: border-box;
    .h(50);
    h2 {
      .f_z(25);
      float: left;
      margin-left: 25%;
      height: 100%;
      line-height: 100%;
    }
    .iconfont {
      .f_z(28);
      color: grey;
      display: block;
      float: left;
    }
  }
  .serch {
    width: 90%;
    .h(30);
    padding-left: 15px;
    margin: 0 0 10px 15px;
    box-sizing: border-box;
    border-radius: 19px;
    background-color: #f5f5f5;
    input {
      .h(30);
      width: 88%;
      display: block;
      background-color: #f5f5f5;
      color: grey;
      .f_z(18);
      float: left;
    }
    .iconfont {
      display: block;
      color: grey;
      .f_z(20);
    }
  }
}
</style>