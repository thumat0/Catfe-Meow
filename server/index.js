const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userQueries = require("./user/userqueries");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contacts", userQueries.insertContact);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
