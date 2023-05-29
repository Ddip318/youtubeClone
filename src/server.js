import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url == "/protected") {
    return res.send("<h1>Not Allowd<h1>");
  }
  next();
};

const handleHome = (req, res) => {
  console.log("Home");
  return res.end();
};
const handleProtected = (req, res) => {
  console.log("welcome protected");
  return res.end();
};

app.use(logger);
//app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Access : ${PORT}`);

app.listen(PORT, handleListening);
