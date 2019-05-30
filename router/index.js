const router = require('koa-router')();
const koaBody = require('koa-body')();

router.get('/',async(ctx, next) => {
    ctx.body = {
        code:200,
        data:{
            text:'Hello Word!'
        },
        message:'success'
    }
})
router.get('/login',async(ctx, next) => {
    ctx.body = `<h1>Index</h1>
    <form action="/user" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`
})
router.post('/user',koaBody,(ctx) => {
    console.log(ctx.request.body);
    ctx.body = JSON.stringify(ctx.request.body)
})

module.exports =  router.routes()