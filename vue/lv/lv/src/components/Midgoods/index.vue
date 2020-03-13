
<template>
  <div class="midgoods">
    <ul class="module-one">
      <li
        v-for="(item,index) in list1"
        :key="index"
        :style="{backgroundImage: 'url( '+ item +')',backgroundSize:'contain'}"
      ></li>
    </ul>
    <ul class="module-two">
      <li
        v-for="(item,index) in list2"
        :key="index"
        :style="{backgroundImage: 'url( '+ item +')',backgroundSize:'contain'}"
      ></li>
    </ul>
  </div>
</template>




<script>
export default {
  data() {
    return {
      list1: [
        "https://www.hksasa.cn/media/design/commerce/kvimage/promo2_1.31-2.3-_071.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/promo2_2.4-6_031.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/promo2_2.4-6_051.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/promo2_2.4-6_091.jpg"
      ],
      list2: [
        "https://www.hksasa.cn/media/design/commerce/kvimage/promo20312_1.jpg",
        "https://www.hksasa.cn/media/design/commerce/kvimage/promo2_20200210_15.jpg"
      ]
    };
  }
};
</script>

<style  lang="less" scoped>
@import "../../style/index.less";
.midgoods {
  ul {
    .w(375);
    li {
      border-radius: 0.5rem;
    }
  }
  .module-one {
    box-sizing: border-box;
    padding: 10px 0 0 10px;
    display: flex;
    .h(270);
    flex-wrap: wrap;
    li {
      .w(173);
      .m_r(6);
      .h(120);
    }
  }
  .module-two {
    .h(190);
    li {
        margin: 0 0 10px 10px;
        box-sizing: border-box;
      .w(355);
      .h(90);
    }
  }
}
</style>
