const moment = require("moment");

const date = moment().format("DD MM YYYY");
console.log(date);

// const coffe = require("./modularization/coffe");

// console.log(coffe);

// const http = require("http");
// const hostname =
//   process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com";
// const port = 3000;
// const requestHandler = (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, World!\n");
// };
// const server = http.createServer(requestHandler);
// server.listen(port, hostname, () => {
//   console.log(`Server berjalan pada http://${hostname}:${port}/`);
// });

// const memoryInformation = process.memoryUsage();

// console.log(memoryInformation);

// const firstName = process.argv[0];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);
