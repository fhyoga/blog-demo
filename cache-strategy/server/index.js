const Koa = require("koa");
const app = new Koa();
const path = require("path");

const expiresCase = require("./case/expires");
const lastModifiedCase = require("./case/lastModified");
const cacheControlCase = require("./case/cacheControl");
const eTagCase = require("./case/eTag");

app.use(async (ctx, next) => {
  ctx.rootDir = path.join(__dirname, "../client");
  await next();
});

// init case

// expiresCase(app);
cacheControlCase(app);
// cacheControlCase(app);
// eTagCase(app);

app.listen(3000);
