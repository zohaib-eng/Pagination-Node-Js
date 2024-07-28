const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express();
const cookieParser = require('cookie-parser');
const { error } = require('console');

app.use(express.json())

app.use(express.urlencoded({urlencoded: true}))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options("*", cors());
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app listening at http://0.0.0.0:${PORT}.`);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome " });
  });


const db = require("./app/model");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});


module.exports=app;