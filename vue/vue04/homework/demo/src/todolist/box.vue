<template>
  <div>
    <todoinput @add="add"></todoinput>
    <todolist :list="list" @del="del" @update="update"></todolist>
  </div>
</template>

<script>
import todolist from "./list";
import todoinput from "./input";
export default {
  components: { todolist, todoinput },
  //这是父组件的数据，传给子组件--子父通信
  data() {
    return {
      list: [
        { msg: "做完今天作业", state: false },
        { msg: "做完昨天作业", state: true }
      ]
    };
  },
  methods: {
    add(msg) {
      this.list.push({ msg: msg, state: false });
    },
    del(index) {
      this.list.splice(index, 1);
    },
    update(index) {
      this.list[index].state = true;
    }
  }
};
</script>