<template>
  <div class="details">
    <div class="header">
      <p class="iconfont back" @click="goBack()">＜</p>
      <h2>商品</h2>
      <p class="iconfont home" @click="goHome()">&#xe625;</p>
    </div>
    <div class="introduction">
      <img v-bind:src="routerParams.url" />
      <div class="priceBox">
        <span>￥{{routerParams.price}}</span>
        <del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;市场价￥{{routerParams.marketPrice}}</del>
      </div>
      <p class="country">{{routerParams.brandCountryRegion}}</p>
      <h2>{{routerParams.name}}</h2>
      <p class="des">瓶身采用湖水绿色，瓶身的形状就如翅膀，半透明的映出香水的亮度，其水晶球瓶盖上坐了一个小顽童，设计立体且精美，可爱而吸引！</p>
      <ul class="cart">
        <li>
          <span class="iconfont">&#xe64f;</span>收藏
        </li>
        <li>
          <span class="iconfont" @click="goCart()">&#xf0179;</span>购物车
        </li>
        <li>
          <button @click="addcart(routerParams)">加入购物车</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerParams: {}
    };
  },
  created() {
    this.routerParams = this.$route.params;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
    addcart(Params) {
      Params.num = 1;
      //将this.routerParams放在vuex，使cart可得到
      this.$store.commit("putIn", Params);
      console.log(this.$store.state.cartArr);
    },
    goCart() {
      this.$router.push({ path: "/cart" });
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
    z-index: 555;
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
  .introduction {
    .cart {
      width: 100%;
      display: flex;
      .h(50);
      li {
        display: flex;
        padding: 0 10px;
        height: 100%;
        flex-direction: column;
        .iconfont {
          .f_z(22);
          text-align: center;
          font-weight: 500;
          color: #ccc;
        }
        .f_z(12);
        button {
          .w(238);
          padding: 10px 5px;
          color: white;
          background-color: hotpink;
          border-radius: 10px;
        }
      }
    }
    width: 100%;
    img {
      .w(375);
      .h(370);
    }
    .priceBox {
      box-sizing: border-box;
      .h(35);
      margin-bottom: 10px;
      display: block;
      padding-left: 20px;
      span {
        .f_z(24);
        color: hotpink;
      }
      del {
        .f_z(14);
        color: grey;
      }
    }
    .country {
      box-sizing: border-box;
      .f_z(14);
      padding-left: 22px;
      color: grey;
      width: 100%;
    }
    h2 {
      box-sizing: border-box;
      .f_z(17);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      padding-left: 20px;
      .l_h(20);
      margin: 10px 0;
    }
    .des {
      padding-left: 10px;
      box-sizing: border-box;
      margin-bottom: 10px;
      .f_z(12);
    }
  }
}
</style>