<template>
  <div class="listpage">
    <div class="header">
      <span class="iconfont back" @click="jump">&#xe61c;</span>
      <h2>毕设电商网</h2>
      <span class="iconfont" @click="jumpHome">&#xe625;</span>
    </div>
    <div class="search">
      <input type="text" v-model="input1" @focus="ask()" />
      <span class="iconfont" v-on:click="search">&#xe7a8;</span>
    </div>
    <ul class="filter">
      <li
        v-for="(item,index) in filterData"
        :key="index"
        @click="highLight(item,upOrDown)"
        :class="{active : active == item}"
      >{{item}}</li>
    </ul>
    <div class="tag">
      <p v-for="(item,index) in tagData" :key="index">{{item}}</p>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="goodBox">
        <div class="goods" v-for="(item,index) in goodList" :key="index" @click="jumpDetails(item)">
          <img :src="item.image" />
          <h5>{{item.name}}</h5>
          <p>香港快送直营</p>
          <span class="price">￥{{item.price}}</span>
          <del>￥{{item.marketPrice}}</del>
          <span class="country">{{item.brandCountryRegion}}</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getListPage } from "../../api/api"; //下拉更新数据
import BS from "better-scroll";
import Pullup from "@better-scroll/pull-up";
export default {
  data() {
    return {
      input1: "", //绑定输入框的值
      filterData: ["综合", "销量", "上架时间▾", "价格▾", "筛选"],
      active: "", //控制高亮
      tagData: [], //标签数据
      id: "", //ajax传参
      page: 2, //ajax传参
      goodList: [], //商品数据
      upOrDown: true, //筛选需要
      isOk: true //防止tag重复渲染
    };
  },
  methods: {
    search() {
      let searchData = [];
      this.goodList.map((item, index) => {
        if (item.name.indexOf(this.input1) == -1) {
        } else {
          searchData.push(item);
        }
      });
      this.goodList = searchData;
    },
    jump() {
      this.$router.push({ path: "/classification" });
    },
    jumpHome() {
      this.$router.push({ path: "/" });
    },
    highLight(name, upOrDown) {
      this.active = name;
      //封装筛选函数
      let sort = sortTag => {
        this.goodList.sort(function(a, b) {
          if (upOrDown) {
            upOrDown = false;
            return a[sortTag] - b[sortTag];
          } else {
            upOrDown = true;
            return b[sortTag] - a[sortTag];
          }
        });
        console.log(upOrDown);
      };
      //根据点击内容整理数据
      switch (name) {
        case "综合":
          this.goodList.sort(function(a, b) {
            if (upOrDown) {
              upOrDown = false;
              return a.__ob__.dep.id - b.__ob__.dep.id;
            } else {
              upOrDown = true;
              return b.__ob__.dep.id - a.__ob__.dep.id;
            }
          });
          break;
        case "销量":
          sort("pid");
          break;
        case "上架时间▾":
          sort("marketPrice");
          break;
        case "价格▾":
          sort("price");
          break;
        case "筛选":
          console.log("筛选");
          break;
        default:
          break;
      }
    },
    initBs() {
      let wrapper = this.$refs.wrapper;
      this.BS = new BS(wrapper, {
        probeType: 3,
        click: true,
        scrollY: true,
        pullUpLoad: true
      });

      this.BS.on("pullingUp", () => {
        this.page++;
        getListPage(this.id, this.page)
          .then(res => {
            for (let index = 0; index < res.data.list.rows.length; index++) {
              this.goodList.push(res.data.list.rows[index]);
            }
          })
          .catch(err => {
            console.log("err :", err);
          });
        //不加以下代码只执行一次
        setTimeout(() => {
          this.BS.finishPullUp();
          this.BS.refresh();
        }, 500);
      });
    },
    jumpDetails(item) {
      //将商品对象做好--->做成字符串传递

      this.$router.push({
        name: "Details",
        params: {
          name: item.name,
          marketPrice: item.marketPrice,
          price: item.price,
          url: item.image,
          brandCountryRegion: item.brandCountryRegion
        }
      });
    },
    ask() {
      //从网址中拿id
      this.id = this.$route.params.id.slice(1);
      getListPage(this.id, this.page).then(res => {
        console.log(res.data);

        if (this.isOk) {
          //取得tag的数据
          res.data.filters.producttag.map((ele, i) => {
            this.tagData.push(ele.name);
          });
        }

        //取得商品的数据
        for (let index = 0; index < res.data.list.rows.length; index++) {
          this.goodList.push(res.data.list.rows[index]);
        }
        this.isOk = false;
      });
    }
  },
  mounted() {
    this.ask();
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
.listpage {
  position: fixed;
  .t(-57.6);
  left: 0px;
  bottom: 0;
  background-color: #f5f5f5;
  right: 0px;
  .header {
    padding: 10px 10px 0 10px;
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .h(50);
    h2 {
      .f_z(25);
      .h(40);
      .l_h(40);
    }
    span {
      .f_z(28);
      color: grey;
      .h(40);
      .l_h(40);
      display: block;
    }
    .back {
      transform: rotate(90deg);
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
      -webkit-transform: rotate(180deg);
    }
  }
  .search {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5%;
    background-color: white;
    position: relative;
    .h(30);
    padding-left: 15px;
    input {
      .h(30);
      background-color: #f5f5f5;
      width: 88%;
      display: block;
      border-radius: 19px;
      color: grey;
      .f_z(18);
      float: left;
    }
    .iconfont {
      position: absolute;
      color: grey;
      right: 60px;
      top: 15px;
      .f_z(20);
    }
  }
  .filter {
    display: flex;
    background-color: white;
    .h(28);
    li {
      width: 20%;
      .h(43);
      text-align: center;
      .f_z(14);
    }
    .active {
      color: hotpink;
    }
  }
  .tag {
    background-color: white;
    width: 100%;
    padding-left: 16px;
    flex-wrap: wrap;
    box-sizing: border-box;
    display: flex;
    p {
      background-color: #f5f5f5;
      .h(30);
      .f_z(14);
      .l_h(30);
      margin: 7px 5px 7px 0;
      padding: 0 10px;
      border-radius: 15px;
    }
  }
  .wrapper {
    .w(375);
    .h(400);
    overflow: hidden;
    .goodBox {
      padding: 5px;
      display: flex;
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: space-around;
      .goods {
        background-color: white;
        margin-bottom: 5px;
        .w(180);
        box-sizing: border-box;
        position: relative;
        .h(302);
        padding: 0 10px;
        img {
          .w(160);
          .h(180);
        }
        h5 {
          width: 100%;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          .l_h(16);
          .f_z(14);
          font-weight: 500;
        }
        p {
          .w(72);
          .h(16);
          position: absolute;
          .f_z(12);
          .t(240);
          .l_h(16);
          color: hotpink;
          border: hotpink 1px solid;
          border-radius: 8px;
        }
        span,
        del {
          .f_z(12);
          color: grey;
          position: absolute;
        }
        .price {
          .f_z(18);
          bottom: 3px;
          color: hotpink;
          left: 5px;
        }
        .country {
          bottom: 5px;
          right: 5px;
        }
        del {
          left: 65px;
          bottom: 5px;
        }
      }
    }
  }
}
</style>