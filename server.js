require("dotenv").config();

const app = require("./app");

const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
