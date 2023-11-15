import koa from "koa"
const app = new koa();

app.use((ctx, next) => {
    ctx.response.body = {
        code: 0,
        mesg: '',
        data: [
            {label: 'a', value: "b"},
            {label: 'a', value: "b"},
            {label: 'a', value: "b"},
        ]
    }
})

app.listen(8081)