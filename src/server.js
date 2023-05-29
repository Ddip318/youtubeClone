import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("i have a kimbob");
};

app.get("/", handleHome);

const handleListening = () => console.log(`Access : ${PORT}`);

app.listen(PORT, handleListening);
