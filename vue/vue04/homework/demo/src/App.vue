<template>
  <div id="app">
    我是app根组件，挂载在main.js上
    <!-- 003.直接引用 -->
    <banner></banner>
    <box></box>
  </div>
</template>

<script>
// 001.引入一个组件---需要引入banner
import banner from "./banner";
import box from "../src/todolist/box";
export default {
  //002.注册组件
  components: { banner,box }
};
</script>

<style>
</style>
