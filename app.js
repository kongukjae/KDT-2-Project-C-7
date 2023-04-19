const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile('map.html',function(err, data){
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.write(data);
  return res.end();
  })
}).listen(8080)
