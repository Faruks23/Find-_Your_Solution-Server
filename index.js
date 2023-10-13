const express = require("express");
const app = express();
const port = process.env | 5000;
const fs = require("fs");
const cors = require("cors");
const Data = JSON.parse(fs.readFileSync("./Data/CA.json"));


app.use(express.json())
app.use(cors());



app.get("/", (req, res) => {

  const gitONe = Data.find((data) => (data.id = 1));

  res.send(gitONe);
});

// get full data
app.get('/All/data', (req, res) => {
  try {
    res.send(Data)

  } catch (error) {
    res.send(error)

  }

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
