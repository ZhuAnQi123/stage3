<template>
  <div class="classification">
    <div class="head">
      <h3>分类</h3>
      <span class="iconfont" @click="back">&#xe616;</span>
    </div>
    <SecondClassification :secondData="secondData" v-show="sonShow" class="animated fadeInLeft"></SecondClassification>
    <div class="content" ref="greadOne">
      <ul class="animated fadeInLeft">
        <li v-for="(item,index) in firstOrder" :key="index" @click="popingOut(index)">
          <span>{{item}}</span>
          <span class="iconfont">&#xe61c;</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { getClassification } from "../../api/api";
import SecondClassification from "../secondClassification";
export default {
  components: { SecondClassification },

  data() {
    return {
      firstOrder: [],
      secondOrder: [],
      secondData: [],
      sonShow: false
    };
  },
  mounted() {
    getClassification()
      .then(res => {
        //数据请求完成后处理👇
        let goodArr = res.data.header.navigationbar.catalog;
        for (let index = 0; index < goodArr.length; index++) {
          this.firstOrder.push(goodArr[index].name);
          let arr = [];
          for (let j = 0; j < goodArr[index].child.length; j++) {
            let obj = {};
            obj.name = goodArr[index].child[j].name;
            obj.id = goodArr[index].child[j].id;
            arr.push(obj);
          }
          this.secondOrder.push(arr);
        }
      })
      .catch(err => {});
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    popingOut(index) {
      this.secondData = this.secondOrder[index];
      this.$refs["greadOne"].style.display = "none";
      this.sonShow = true;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";

.classification {
  width: 100%;
  .h(57.6);
  .head {
    padding: 0 11.5px 0 42%;
    h3 {
      .f_z(20);
      display: inline-block;
      .h(47);
      .l_h(47);
    }
    span {
      .f_z(25);
      display: block;
      float: right;
      .h(57);
      .l_h(57);
    }
  }
  .content {
    width: 100%;
    height: 15.266667rem;
    background-color: rgb(246, 246, 246);
    padding-top: 10px;
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

