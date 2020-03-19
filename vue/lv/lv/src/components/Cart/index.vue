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
      <li>
        <input type="checkbox" id="eachCheck" />
        <img
          src="https://www.hksasa.cn/media/catalog/product/cache/9bb9d677791f8666003e194c8a94aeff/9/4/94546ac32f45e68a4cc374be7292a085dabb1ec7_3.jpg"
          alt
        />
        <h5>男士清爽控油洗面乳</h5>
        <p class="freight">预计运费￥24.5</p>
        <span class="price">￥189</span>
        <div class="numControl">
          <p>+</p>
          <input type="text" />
          <p>-</p>
        </div>
        <p class="del">删除</p>
      </li>
    </ul>
  </div>
</template>


<script>
export default {};
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