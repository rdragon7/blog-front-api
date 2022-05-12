const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "hello world";
});

module.exports = app;
