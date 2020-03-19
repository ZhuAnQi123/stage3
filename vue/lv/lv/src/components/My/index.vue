<template>
  <div class="tab">
    <p class="iconfont" @click="backHome()">&#xe625;</p>
    <img src="../../assets/logo.png" />
    <h3>账户登录</h3>
    <input type="text" placeholder="请输入手机/邮箱" class="account" />
    <input :type="typeChange" placeholder="请输入密码" class="pass" />
    <span class="iconfont eye" @click="visiable()">
      👁
      <span class="DeleteLine" v-show="visiableControl">/</span>
    </span>
    <button>登录</button>
    <div class="logIn">
    <a href="https://www.hksasa.cn/findpwd.html">忘记密码</a>
    <a href>立即注册</a></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visiableControl: true,
      typeChange: "input"
    };
  },
  methods: {
    visiable() {
      let DeleteLine = this.$refs.DeleteLine;
      this.visiableControl = !this.visiableControl;
      if (this.visiableControl) {
        this.typeChange = "input";
      } else {
        this.typeChange = "password";
      }
    },
    backHome(){
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.tab {
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  box-sizing: border-box;
  padding: 28px;
  right: 0;
  .logIn{
    display: flex;
    justify-content: space-between;
a{
    color: rgb(102,102,102);
  .f_z(15);
}
  }
  button {
    background-color: hotpink;
    .w(318);
    .h(50);
    color: white;
    .f_z(15);
    margin-bottom: 20px;
    border-radius: 1.6rem;
  }
  p {
    .f_z(26);
  }
  img {
    .h(80);
    margin-top: 30px;
    .w(80);
    margin-left: 40%;
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
    .f_z(18);
    width: 100%;
    color: green;
    font-weight: 500;
    text-align: center;
  }
  .DeleteLine {
    position: absolute;
    .f_z(20);
    bottom: 0;
    .l(6);
    color: gray;
  }
  .eye {
    position: absolute;
    .f_z(20);
    color: gray;
    .t(295);
    .l(320);
  }
  input {
    .f_z(15);
    padding: 10px 0;
    box-sizing: border-box;
    .w(318);
    .h(40);
    margin-bottom: 20px;
    border-bottom: 2px solid #f3f3f3;
  }
}
</style>