const path = require('path')


//解决跨域问题：vue官网--生态系统--vue CLI--配置参考--（左边）devSever.proxy帮助我们设置代理信息
//改完此文件配置项之后记得重启
module.exports = {
  lintOnSave: false,//关闭eslint
  devServer: {
    proxy: {
      //在proxy内配置代理服务器，使网址经过本地服务器转发
      '/hehe': {                           // 接口小暗号
        target: 'http://ustbhuangyi.com', //要转发的目标网址目标网址 
        changeOrigin: true,               //固
        pathRewrite: {
          "^/hehe": ''                     //将路径中多余的暗号 删除
        }
      },
      // 老方的线上接口代理
      '/xixi': {
        target: 'http://47.95.207.1:3000',
        changeOrigin: true,
        pathRewrite: {
          "^/xixi": ''  //将路径中多余的暗号 删除
        }
      }
    }
  },
  // http://ustbhuangyi.com/afas/fsdfsd/sdfsdf/sfsdf  
  //  /hehe/afas/fsdfsd/sdfsdf/sfsdf  请求的本地服务器
  // http://ustbhuangyi.com/afas/fsdfsd/sdfsdf/sfsdf 本地服务器转发



  //给路径起别名简化路径
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))  //src的绝对路径起一个别名叫@
      .set('api', resolve('./src/api'))
      .set('style', resolve('./src/style'))
      .set('components', resolve('./src/components'))
  }
}

//👇封装resolve函数.传入相对路径返回绝对路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

