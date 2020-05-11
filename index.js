
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

const showsRouter = require("./routes/shows")
const summaryRouter = require("./routes/summary")

app.use("/shows", showsRouter);
app.use("/summary", summaryRouter);


app.get("/", (req, res) => {
    res.redirect("/shows");
  });

  app.set("port", process.env.PORT || 2000);
  
  app.listen(app.get("port"), () =>
    console.log(`PORT: ${app.get("port")}`)
  );