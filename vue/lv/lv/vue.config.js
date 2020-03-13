

//解决跨域问题：vue官网--生态系统--vue CLI--配置参考--（左边）devSever.proxy帮助我们设置代理信息
//改完此文件配置项之后记得重启
module.exports = {
  lintOnSave: false,//关闭eslint
  devServer: {
    proxy: {
      //在proxy内配置代理服务器，使网址经过本地服务器转发
      '/hehe': {                           // 接口小暗号
        target: 'https://www.hksasa.cn', //要转发的目标网址目标网址 
        changeOrigin: true,               //固
        pathRewrite: {
          "^/hehe": ''                     //将路径中多余的暗号 删除
        }
      }
    }
  },

}



