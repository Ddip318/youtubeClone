import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = process.env.PORT || 3000;

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// callback : 대기를 하고 Then(render이후 마지막)실행 <-> promise
