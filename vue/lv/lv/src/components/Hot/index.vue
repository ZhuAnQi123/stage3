<template>
  <div class="tab">
    <div class="header">
      <h2>今日特卖</h2>
      <p>
        剩余
        <span>11</span>:
        <span>11</span>:
        <span>11</span>
      </p>
    </div>
    <div class="wrapper" ref="wrapper">
      <!-- 👆容器层，👇内容层。名字随意。只有容器层的第一个子元素为内容层，其他无效 -->
      <div class="content">
        <ul class="goods">
          <li v-for="(item,index) in hotGoods[0]" :key="index">
            <img v-lazy="item.image" />
            <h5>{{item.name}}</h5>
            <p class="dercription">{{item.shortDescription}}</p>
            <div class="percentage">
              <span class="Bar">
                <span class="sold" :style='"width:"+item.soldLength+"rem"'></span>
              </span>
              <span class="rest">已抢{{parseInt( 100*item.soldQty/item.totalQty)}}%</span>
            </div>
            <div class="price">
              <span>￥</span>
              <span class="currentPrice">{{item.price}}</span>
              <del>{{item.originalPrice}}</del>
            </div>
            <button>立即抢购</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import BS from "better-scroll";
import { getHotgoods } from "../../api/api";
//下拉更新数据
import Pullup from "@better-scroll/pull-up";

export default {
  data() {
    return {
      hotGoods: [],
      page: 1,
    };
  },
  methods: {
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
        getHotgoods(this.page)
          .then(res => {
            //将请求到的数据逐个加到hotGoods
            for (
              let i = 0;
              i < res.data.flashSaleData.productList.rows.length;
              i++
            ) {
              this.hotGoods[0].push(res.data.flashSaleData.productList.rows[i]);
            }
          })
          .catch(err => {
            console.log("err :", err);
          });
          //不加以下代码只执行一次
          setTimeout(() => {
            this.BS.finishPullUp()
            this.BS.refresh()
        }, 500)
      });
    }
  },
  mounted() {
    //传入浏览中的页码
    getHotgoods(this.page)
      .then(res => {
        this.hotGoods.push(res.data.flashSaleData.productList.rows);
      })
      .catch(err => {
        console.log("err :", err);
      });
    console.log(this.hotGoods);
  },
  updated() {
    //计算进度条长度再插入数组中
    for (let index = 0; index < this.hotGoods[0].length; index++) {
      this.hotGoods[0][index].soldLength =
       1.92* this.hotGoods[0][index].soldQty / this.hotGoods[0][index].totalQty;
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
.tab {
  .header {
    width: 100%;
    .h(23);
    padding-left: 20%;
    position: fixed;
    z-index: 999;
    background-color: hotpink;
    h2 {
      color: white;
      .h(23);
      .f_z(20);
      .l_h(23);
      margin-right: 7px;
      float: left;
    }
    p {
      .l_h(23);
      .f_z(16);
      .h(23);
      float: left;
      color: white;
      span {
        background-color: white;
        border-radius: 50%;
        .f_z(12);
        display: inline-block;
        text-align: center;
        .h(22);
        .w(22);
        color: hotpink;
      }
    }
  }
  .wrapper {
    .h(594);
    width: 100%;
    position: fixed;
    .t(23);
    left: 0;
    right: 0;
    .content {
      width: 100%;
      height: auto;
      .goods {
        padding-top: 12px;
        width: 100%;
        height: auto;
        padding-top: 12px;
        li {
          .w(351);
          .h(145);
          border-radius: 6px;
          margin: 0 12px 12px 12px;
          padding: 10px;
          box-sizing: border-box;
          img {
            .w(100);
            float: left;
            .h(100);
            margin-right: 8px;
          }
          h5 {
            float: left;
            .w(218);
            .l_h(14.95);
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            .f_z(13);
          }
          .price {
            .w(80);
            .m_t(25);
            .h(30);
            .m_r(20);
            float: left;
            span {
              .f_z(14);
              color: hotpink;
            }
            .currentPrice {
              .f_z(22);
              margin: 0 3px 0 5px;
            }
            del {
              color: grey;
              .f_z(12);
            }
          }
          button {
            .w(90);
            .m_t(43);
            .h(28);
            background-color: hotpink;
            color: white;
            .f_z(14);
            border-radius: 8px;
            text-align: center;
          }

          .percentage {
            .w(250);
            .h(15);
            .m_t(-10);

            .Bar {
              .w(75);
              .h(6);
              display: inline-block;
              border-radius: 5px;
              margin-right: 5px;
              position: relative;
              background-color: rgb(234, 234, 234);
              .sold {
                .h(6);
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 5px;
                bottom: 0;
                background-color: hotpink;
              }
            }
            .rest {
              .f_z(12);
            }
          }

          .dercription {
            .w(210);
            .h(13);
            .f_z(12);
            margin-top: 20px;
            .l_h(13);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
        }
      }
    }
  }
}
</style>