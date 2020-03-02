<template>
  <div id="app">
    <!-- 大写字母用连字符+小写代替 -->
    <!-- <less-demo></less-demo> -->
    <Header></Header>
    <Tab></Tab>
    <router-view/>
  </div>
</template>


<script>
import Header from "./components/Header";
import Tab from "./components/Tab";
export default {
  components: { Header, Tab }
};
</script>
<style lang="less" scoped>
@import "./style/index.less";
#app {
  background: @black2;
  .w(375);
  height: 100vh;
}
</style>
