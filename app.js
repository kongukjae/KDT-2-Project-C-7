// // const http = require('http');
// // const fs = require("fs");
// import http from "http"
// import fs from "fs"
// // import locationMap from "./locationMap.js"
// // import currentLocation from './geolocation.js'

// //여기에 경로
// // const server = http.createServer(function(req, res){
// //   if(req.method === "GET"){

// //   }
// //   if(req.method === "POST"){

// //   }
// // })

// http.createServer((req, res) => {
//   const _url = req.url;
//   const fullUrl = new URL("http://localhost:3000" + _url);
//   const pathName = fullUrl.pathname;
//     if(pathName === "/"){ //이거는 로컬호스트3000맨위 /를 가리킨다
//       fs.readFile('./views/map.html',function(err, data){
//         res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//         res.write(data);
//         res.end();
//       })
//     }
//   // var url = req.url;
//   // if(req.url === '/'){
//   //   url = '/map.html';
//   // }
//   // if(request.url == '/favicon.ico'){
//   //   response.writeHead(404);
//   //   response.end();
//   //   return;
//   // }
//   // response.writeHead(200);
//   // response.end(fs.readFileSync(__dirname + url));
  
// }).listen(8080)

// var http = require('http');
// var url = require('url');
// var fs = require('fs');
import http from "http"
import fs from "fs"
import url from "url"


var server = http.createServer(function(request,response){
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;

  //url 모듈을 사용하여 클라이언트로부터 요청된 URL을 파싱하고, 파싱된 URL에서 경로 이름을 추출합니다.
  // url.parse(request.url)은 request.url을 파싱하여 URL의 다양한 구성 요소를 객체 형태로 반환합니다. 이 객체에는 pathname 속성이 있으며, 이 속성은 URL의 경로 이름을 나타냅니다.
  // 따라서 parsedUrl.pathname은 request.url에서 추출된 경로 이름을 나타냅니다. 이후 이 변수 resource에 할당되어 해당 경로 이름을 나타내게 됩니다.

  //get post
  
  // 1. 요청된 자원이 / 이면
  if(resource == '/0427main'){
    // 2. .html 파일을 읽은 후
    fs.readFile('0427main.html', 'utf-8', function(error, data) {
      // 2.1 읽으면서 오류가 발생하면 오류의 내용을
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server Error : '+error);
      // 2.2 아무런 오류가 없이 정상적으로 읽기가 완료되면 파일의 내용을 클라이언트에 전달
      }else{
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
      }
    });
  }else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Found');
  }
});

server.listen(8080, function(){
    console.log('Server is running...');
});