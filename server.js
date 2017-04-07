const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8888;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/app.html');
});

app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
});