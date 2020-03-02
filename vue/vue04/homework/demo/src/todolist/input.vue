<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button @click="inputadd">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    inputadd() {
      // 触发自定义事件
      this.$emit("add", this.inputValue);
    }
  }
};
</script>