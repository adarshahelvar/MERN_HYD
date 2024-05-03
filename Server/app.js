const http = require("http");

function reqListnersFunction(req, res) {
  console.log(req);
}

// http.createServer(reqListners)
// const server = http.createServer(reqListnersFunction);
const server = http.createServer((req, res) => {
  // console.log(req.method, req.url, req.headers)
  // console.log(res)
  res.write("<html>");
  res.write("<head><title>Response from server</title></head>");
  res.write("<body><h1>Hello form Node-JS</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
