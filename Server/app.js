const http = require("http");
const fs = require("fs");

function reqListnersFunction(req, res) {
  console.log(req);
}

// http.createServer(reqListners)
// const server = http.createServer(reqListnersFunction);
const server = http.createServer((req, res) => {
  // console.log(req.method, req.url, req.headers)
  // console.log(res)
  // const url = req.url;
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' /> <button type='submit'>Submit</buttton></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      // console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }


  res.write("<html>");
  res.write("<head><title>Response from server</title></head>");
  res.write("<body><h1>Hello form Node-JS</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
