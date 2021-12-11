const Koa = require('koa')

const app = new Koa()

app.use((context, next) => {
    console.log('--->koa-context:', context)
})

app.listen(3001)