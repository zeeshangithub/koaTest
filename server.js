var koa = require('koa');
var app = koa();

app.use(function * (){  
  this.body = "Hello from KOA";
 });

app.listen(3000);
console.log("App is running on port 3000");