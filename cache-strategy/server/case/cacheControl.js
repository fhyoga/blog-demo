// Cache-Control
const fs = require("fs");
module.exports = app => {
  app.use(async ctx => {
    let cacheControl = "max-age=10";
    //   let cacheControl = "no-cache";
    //   let cacheControl = "public";
    //   let cacheControl = "no-store";
    //   let cacheControl = "s-maxage=10";
    ctx.set({ "Cache-Control": cacheControl, "Content-Type": "text/html; charset=utf-8" });
    ctx.body = fs.readFileSync(ctx.root + ctx.path);
  });
};
