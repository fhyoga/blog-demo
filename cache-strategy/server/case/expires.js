// Expires
const fs = require("fs");
module.exports = app => {
  app.use(async ctx => {
    let expires = new Date(new Date().valueOf() + 10000).toGMTString();
    ctx.set({ Expires: expires, "Content-Type": "text/html; charset=utf-8" });
    ctx.body = fs.readFileSync(ctx.rootDir + ctx.path);
  });
};
