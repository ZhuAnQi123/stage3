<template>
  <div class="tab">
    <div class="header">
      <h2>购物车</h2>
      <span class="itemCount">1</span>
    </div>
    <ul class="cartBox">
      <h3>
        <input type="checkbox" id="leadCheck" /> 香港特快直送
      </h3>
      <li v-for="(item,index) in this.$store.state.cartArr" :key="index">
        <input type="checkbox" id="eachCheck" />
        <img v-bind:src="item.url" alt />
        <h5>{{item.name}}</h5>
        <p class="freight">预计运费￥10</p>
        <span class="price">￥{{item.price}}</span>
        <div class="numControl">
          <p @click="addStore()">+</p>
          <input type="text" v-model="item.num" />
          <p>-</p>
        </div>
        <p @click="declineStore()" class="del">删除</p>
      </li>
      <div class="noShit" v-if='show'>您还没有添加商品~</div>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {
    if(this.$store.state.cartArr.length){
      this.show=false
    }
  },
  methods: {
    addStore() {},
    declineStore() {}
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.tab {
  .h(612);
  background-color: #f4f4f4;
  left: 0;
  .header {
    margin-bottom: 10px;
    h2 {
      float: left;
      display: block;
      margin-left: 40%;
    }
    width: 100%;
    .h(44);
    .f_z(18);
    font-weight: 400;
    color: white;
    text-align: center;
    .l_h(44);
    background-color: hotpink;
    .itemCount {
      .f_z(12);
      .h(22);
      .l_h(22);
      .w(22);
      .m_t(10);
      float: left;
      display: block;
      border-radius: 50%;
      background-color: white;
      color: hotpink;
    }
  }
  .cartBox {
    background-color: white;
    margin: auto;
    .w(351);
    border-radius: 10px;
   .noShit{
     .f_z(25);
     padding: 10px 0;
     text-align: center;
   }
    h3 {
      .h(44);
      .f_z(12);
      padding-left: 15px;
      .l_h(44);
      border-bottom: 1px solid #f4f4f4;
    }
    li {
      border-bottom: 1px solid #f5f5f5;
      padding-left: 15px;
      position: relative;
      img {
        .w(94);
        .h(94);
      }
      h5 {
        .f_z(12);
        position: absolute;
        .t(10);
        .l(125);
      }
      .freight {
        .f_z(12);
        display: inline-block;
        color: gray;
        position: absolute;
        .t(68);
      }
      .price {
        .f_z(16);
        display: inline-block;
        color: hotpink;
      }
      .numControl {
        .h(20);
        .m_l(100);
        display: inline-block;
        p {
          .f_z(23);
          .h(20);
          color: gray;
          .l_h(20);
          display: inline-block;
        }
        input {
          background-color: #f4f4f4;
          .f_z(16);
          border-radius: 10px;
          display: inline-block;
          .w(40);
          .h(20);
          .l_h(20);
          text-align: center;
        }
      }
      .del {
        .f_z(12);
        position: absolute;
        .t(68);
        color: gray;
        .l(300);
      }
    }
  }
}
</style>