<template>
  <div id="app">
    <router-view />
    <bottom ></bottom>
  </div>
</template>


<script>
import bottom from "./components/Bottom";
export default {
  components: { bottom },
};
</script>

<style lang="less" scoped>
@import "./style/index.less";
#app {
  width: 100%;
  height: 100vh;
}
</style>
