const Koa=require('Koa');
const app=new Koa();

app.use(ctx=>{
    ctx.body='练习使用Koa'; 
});
app.listen(3000);