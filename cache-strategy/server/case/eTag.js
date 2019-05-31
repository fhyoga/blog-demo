// ETag
const fs = require("fs");
let hash = "56d9be076704eca06026a38278a8a1c0f179e22a";
module.exports = app => {
  return app.use(async ctx => {
    let ifNoneMatch = ctx.request.headers["if-none-match"];
    if (ifNoneMatch === hash) {
      ctx.status = 304;
    } else {
      ctx.set({ ETag: hash, "Content-Type": "text/html; charset=utf-8" });
      ctx.body = fs.readFileSync(ctx.rootDir + ctx.path);
    }
  });
};
