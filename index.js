const express = require("express");
const path = require("path");
const routes = require("./routes");

const port = 5000;

const server = express();

const basePath = path.join(__dirname, "templates");

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.json());

server.use(express.static("public"));

server.get("/", (request, response) => {
  response.sendFile(`${basePath}/index.html`);
});

server.use("/api", routes);

server.use((request, response, next) => {
  response.status(404).sendFile(`${basePath}/notFound.html`);
});

server.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
