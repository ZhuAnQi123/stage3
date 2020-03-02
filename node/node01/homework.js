/*
短信轰炸器 每隔 1s发一条短信
邮箱轰炸器 每隔1s 发一条邮件
通过第三方模块发送邮件 nodemailer
*/
//node_modules/nodemailer/lib/well-know/services.json

// 引入第三方模块
const nodemailer = require("nodemailer");
//创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '1170843252@qq.com', // 发送方邮箱账号
        pass: 'hddmtuthqsfwjdfd' // 邮箱的授权码--qq邮箱--设置--开启服务--POP3/SMTP服务--开启
    }
});
// 邮件的内容
let content = {
    from: '"Fred Foo 👻" <1170843252@qq.com>', // 邮件的发送方
    to: "435933233@qq.com", // 接收方(逗号隔开)
    subject: "whats up bitch？", // Subject line
    html: "<b>朱安琪是世界上最好看的女人！</b>" // html body
}
//调用sendMail方法发送 
for (let i = 0; i < 30; i++) {
    transporter.sendMail(content, (err) => {
        console.log(err)
    });
}


