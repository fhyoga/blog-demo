// Last-Modified

const fs = require("fs");
let stamp = 1559283425000;
let lastModified = new Date(stamp).toGMTString();
module.exports = app => {
  app.use(async ctx => {
    let ifModifiedSince = ctx.request.headers["if-modified-since"];
    let sinceStamp = ifModifiedSince && new Date(ifModifiedSince).valueOf();
    if (sinceStamp && sinceStamp >= stamp) {
      ctx.status = 304;
    } else {
      ctx.set({ "Last-Modified": lastModified, "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" });
      ctx.body = fs.readFileSync(ctx.root + ctx.path);
    }
  });
};
