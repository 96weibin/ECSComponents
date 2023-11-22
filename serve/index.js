import koa from "koa";
import Router from "koa-router";
import {koaBody} from "koa-body";
import cors from '@koa/cors';
import serve from 'koa-static'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = new koa();
const router = new Router();
const port = process.env.PORT || 4444


router.get('/api/getBanners',ctx =>{
    ctx.body = {
        msg: "",
        code: 0,
        data: [
            {url:`http://${ctx.request.host}/AutumnAura.png`, title: "AutumnAura", desc: "An autumn scene with a forest adorned in shades of orange, red, and yellow, a carpet of fallen leaves, and a warm, golden light that creates a cozy, nostalgic feeling"},
            {url:`http://${ctx.request.host}/SpringSymphony.png`, title: "SpringSymphony", desc: "A vibrant spring scene with a field of colorful flowers under a bright blue sky, where butterflies flutter and a gentle breeze enlivens the atmosphere"},
            {url:`http://${ctx.request.host}/SummerSerenade.png`, title: "SummerSerenade", desc: "A tranquil summer landscape showcasing a serene lake with crystal-clear waters, surrounded by lush greenery and vibrant wildflowers, under a clear blue sky."},
            {url:`http://${ctx.request.host}/WinterWhisper.png`, title: "WinterWhisper", desc: "A serene winter landscape with snow-covered trees and a small, frozen pond under a clear, starry sky, evoking a sense of peace and tranquility."},
        ]
    }
})

app
.use(async (ctx, next)=>{
    console.log(`Method: ${ctx.request.method} --- Request: ${ctx.request.url}....`)
    await next()
})
.use(serve(path.join(__dirname, 'images')))
.use(koaBody())     //要先body处理
.use(cors({
    origin:'*'  //允许跨域 的域名 
    //还可以设置方法等 
}))         
.use(router.routes())
.use(router.allowedMethods())

app.listen(port, () => {
    console.log(`Serving on ${port}!`)
})