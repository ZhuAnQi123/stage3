<template>
  <div id="app">
    <!-- 大写字母用连字符+小写代替 -->
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
    <!-- 播放器组件 -->
    <Player></Player>
  </div>
</template>


<script>
import Header from "./components/Header";
import Tab from "./components/Tab";
import Player from './components/Player'

export default {
  components: { Header, Tab ,Player}
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
