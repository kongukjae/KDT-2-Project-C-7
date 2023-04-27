import http from "http"
import fs from "fs"
import url from "url"

var server = http.createServer(function(request,response){
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;
  
  console.log("parsedUrl",parsedUrl)
  console.log("resource",resource) //url을 콘솔로 확인하기

  // 1. 요청된 자원이 / 이면
  if(resource == '/'){
    // 2. .html 파일을 읽은 후
    fs.readFile('main.html', 'utf-8', function(error, data) {
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
  }
  // else{
  //   response.writeHead(404, {'Content-Type':'text/html'});
  //   response.end('404 Page Not Found');
  // }

  //이렇게 경로 만들어주고
  if(resource == '/map.js'){
    // 2. .html 파일을 읽은 후
    fs.readFile('./map.js', 'utf-8', function(error, data) {
      // 2.1 읽으면서 오류가 발생하면 오류의 내용을
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end('500 Internal Server Error : '+error);
      // 2.2 아무런 오류가 없이 정상적으로 읽기가 완료되면 파일의 내용을 클라이언트에 전달
      }else{
        response.writeHead(200, {'Content-Type':'text/js'}); //html파일이 아니니깐 js로 수정
        response.end(data);
      }
    });
  }
  // else{
  //   response.writeHead(404, {'Content-Type':'text/html'});
  //   response.end('404 Page Not Found');
  // }
});

server.listen(8080, function(){
    console.log('Server is running...');
});