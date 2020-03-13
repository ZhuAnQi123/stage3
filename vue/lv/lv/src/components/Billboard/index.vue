<template>
  <div class="Billboard">
    <h3>公告</h3>
    <ul ref="ul">
      <li v-for="(item,index) in list" :key="index">
        <p>{{item}}</p>
        <a>| 查看更多</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [
        "快递公司全面复工 各家快递复工时间表一览_TechWeb",
        "三八女王节优惠的最新相关信息",
        "新冠肺炎的最新相关信息"
      ],
      timer:'',
      tik:0
    };
  },
  methods: {
      get() {
    let ul = this.$refs.ul;
        this.tik--;
        if(this.tik<-2){
          this.tik=0;
        }
        ul.style.top = this.tik+'rem';
      }
    },
  mounted() {
    this.timer = setInterval(this.get, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.Billboard {
  .h(38);
  width: 100%;
  padding: 0 16px 8px 14px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  h3 {
    font-size: 0.4rem;
    float: left;
    .l_h(38);
    .h(38);
    color: hotpink;
  }
  ul {
    padding-left: 40px;
    position: absolute;
    li {
      p {
        .h(38);
        .l_h(38);
        float: left;
        .w(245);
        font-size: 0.35rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
      a {
        font-size: 0.35rem;
        display: block;
        float: left;
        .h(38);
        .l_h(38);
      }
    }
  }
}
</style>