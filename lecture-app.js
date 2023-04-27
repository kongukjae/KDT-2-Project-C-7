import http from "http"
import fs from "fs"
import url from "url"

const server = http.createServer(function(request, response) {
  const parsedUrl = url.parse(request.url);
  const resource = parsedUrl.pathname;

  console.log("이거 URL이여?", parsedUrl);
  console.log("이게 리소스여?", resource);

    if(resource === "/") {
    fs.readFile("./0427main.html", 'utf-8', function(error, data) {
      if(error) {
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server '+error);
      } else {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
      }

    });
  }

  // ! 요기가 안먹혀 뭔가 있나봐
  if(resource === "/0427map.js") {
    fs.readFile("./0427map.js", 'utf-8', function(error, data) {
      if(error) {
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server '+error);
      } else {
        response.writeHead(200, {'Content-Type':'text/js'});
        response.end(data);
      }

    });
  }

  // if(resource === "/0427main") {
  //   fs.readFile("./0427main.html", 'utf-8', function(error, data) {
  //     if(error) {
  //       response.writeHead(500, {'Content-Type':'text/html'});
  //       response.end('500 Internal Server '+error);
  //     } else {
  //       response.writeHead(200, {'Content-Type':'text/html'});
  //       response.end(data);
  //     }

  //   });
  // }
});

server.listen(8080, function(){
  console.log('Server is running...8080');
});
