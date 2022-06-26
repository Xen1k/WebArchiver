const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors());

app.use(express.json({extended: true}));
app.use("/", require("./routes/compress"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log("Started server!"));



