// 服务器的入口文件
// 1.创建KOA的实例对象
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Axios = require('axios')
const getIPAddress = require('./utils/getIPAddress'); // 获取本机ip
const app = new Koa()

app.use(bodyParser())
// 2.绑定中间件
// 第一层中间件：计算服务器响应耗时
const respDurationMiddleware = require('./middleware/duration')
app.use(respDurationMiddleware)
// 第二层中间件：设置响应头部header
const respHeaderMiddleware = require('./middleware/header')
app.use(respHeaderMiddleware)
// 第三层中间件：处理业务逻辑
const respDataMiddleware = require('./middleware/data')
app.use(respDataMiddleware)
// 3.绑定端口号 8888
app.listen(8888, () => {
  console.log('==================')
  console.log('服务启动成功~')
  console.log('地址:', `http://${getIPAddress()}:8888`)
  console.log('==================')
})

