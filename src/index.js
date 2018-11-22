const express = require("express");
const { flags } = require("./routes/index.js");

const app = express();

app.use("/flags", flags);

app.listen(8080, () => {
  console.log("hello!");
});
