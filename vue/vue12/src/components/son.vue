<template>
  <div class="hello">
    <h3>这里是子组件</h3>
    {{value}}
    <!-- <button @click='changeName'>改名</button> -->
    <!-- 👆上==下👇 -->
     <!-- 
      在组件上使用v-model 
      相当于提供了一个叫 value 的自定义属性 props 
      一个叫input的自定义事件 emit
     -->
    <input type="text" 
      :value='value'
      @input='$emit("input",$event.target.value)'
    />
  </div>
</template>

<script>
export default {
  props:['value'],
  methods:{
    changeName(){
      // 触发组件上的自定义事件
      this.$emit('input','李雷雷')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
