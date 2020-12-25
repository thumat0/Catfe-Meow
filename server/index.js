const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3000;

// app.get("/", (req, res) => {
//     res.status(200).send(`Hello World! Our server is running at port ${port}`);
// });

app.get("/Node", (req, res) => {
    res.send("Tutorial on Node");
});

app.get("/Angular", (req, res) => {
    res.send("Tutorial on Angular");
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
