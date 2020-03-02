//001接受客户端传来的信息
//002根据类型处理返回什么样的信息
//003将要发送的信息传给客户端

//长链接socket 服务器用来推送消息
const websocket = require('ws')
const ws = new websocket.Server({ port: 3010 })
let clients = {} //用来保存所有的客户端对象，登录之后通知除自己外的其他用户
ws.on('connection', (client) => {
  client.on('message', (message) => {
    // 接受客户端发送的 json字符串--转码
    let { type, msg, name } = JSON.parse(message)
    switch (type) {
      case 'login':
        // 将客户端对象和用户名做关联 
        clients[name] = client
        console.log(name + '已登录')
        // console.log('客户端集合',clients) 
        // 通知其他用户xx人进入客户端
        sendAll(name, msg, type)
        break;
      case 'chart':
        // 聊天消息
        console.log(name + '发来的消息' + msg)
        sendAll(name, msg, type)
        break
      default:
        break;
    }
  })
})

// 群发 
function sendAll(name, msg, type) {
  let obj = null
  switch (type) {
    case 'login'://新登陆的时候
      obj = {
        type: 'welcome',
        msg: `欢迎${name}进入聊天室`,
        name: name
      }
      break;
    case 'chart'://登陆后发送消息时
      obj = {
        type: 'chart',
        msg: msg,
        name: name
      }
      break;
    default:
      break;
  }
  // 发送给除了自己之外其他人
  for (const key in clients) {
    // 排除说话人自己
    if (key !== name) {
      clients[key].send(JSON.stringify(obj))
    }
  }
}
