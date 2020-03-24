let dburl = 'mongodb+srv://anqizhu:<password>@cluster0-bgnyq.mongodb.net/test?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', () => {
    console.log("数据库连接失败")
});
db.once('open', function () {
    console.log('数据库连接成功')
})

//Schema对象的创建-->相当于表头
let userSchema = mongoose.Schema({
    user: { type: String },
    pass: { type: String },
})

//创建users表，与表头userSchema关联
let model = mongoose.model('users', userSchema)

//注册功能，向表中添加用户信息{user:'',pass:''}要传入
// model.insertMany({user:'',pass:''})
// .then(()=>{
//     console.log('新用户注册成功');
// })
// .catch(()=>{
//     console.log('注册失败');
// })


//登录功能--->us,ps是需要传来的数据
// users.find({us,ps})
// .then((data)=>{
//   console.log('then',data)
//   if(data.length==1){
//     res.send({err:0,msg:'登录ok'})
//   }else{
//     res.send({err:-1,msg:'用户名或密码错误'})
//   }
// })
// .catch((err)=>{
//   res.send({err:-2,msg:'内部错误请重试'})
//   console.log("err",err)
// })