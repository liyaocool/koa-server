const Koa = require('koa')

const app = new Koa()

app.use(async(ctx, next) => {
    await next()
    ctx.body = {
        code:200,
        data:{
            text:'Hello Word!'
        },
        message:'success'
    }
})

app.listen(1314)
console.log('程序已在1314端口运行')
console.log('本地:','localhost:1314')
console.log('网络:','127.0.0.1:1314')