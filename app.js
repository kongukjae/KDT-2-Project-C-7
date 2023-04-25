// const http = require('http');
// const fs = require("fs");
import http from "http"
import fs from "fs"
// import locationMap from "./locationMap.js"
// import currentLocation from './geolocation.js'

//여기에 경로
// const server = http.createServer(function(req, res){
//   if(req.method === "GET"){

//   }
//   if(req.method === "POST"){

//   }
// })

http.createServer((req, res) => {
  // var url = req.url;
  // if(req.url === '/'){
  //   url = '/map.html';
  // }
  // if(request.url == '/favicon.ico'){
  //   response.writeHead(404);
  //   response.end();
  //   return;
  // }
  // response.writeHead(200);
  // response.end(fs.readFileSync(__dirname + url));
  fs.readFile('map.html',function(err, data){
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.write(data);
  return res.end();
  })
}).listen(8080)