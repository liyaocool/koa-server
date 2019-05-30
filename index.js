const Koa = require('koa')
const app = new Koa()
const router = require('./router')

app.use(async(ctx, next) => {
    await next()
    
})

app.use(router)


app.listen(1314)
console.log('程序已在1314端口运行')
console.log('本地:','localhost:1314')
console.log('网络:','127.0.0.1:1314')