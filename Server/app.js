const http = require("http");
const express = require("express");
const fs = require("fs");
const route = require("./routes");
// console.log(route.role)

const server = http.createServer(route);

server.listen(3000);

/*
1-> syntax error: Typo's
2-> Rutime error: 
3-> Logical error: Get the o/p but not an expected output.
*/

