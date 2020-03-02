<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item.msg}}
        <button @click="itemDel(index)">del</button>
        <span v-if="item.state">done</span>
        <button v-else @click="itemFinish(index)">undone</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  //props用于接收父组件的数据，这里使用的是对象接受（default默认项）
  props: { list: { type: Array, default: [] } },
  methods: {
    itemDel(index) {
      this.$emit("del", index);
    },
    itemFinish(index) {
      this.$emit("update", index);
    }
  }
};
</script>