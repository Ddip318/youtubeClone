import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// callback : 대기를 하고 Then(render이후 마지막)실행 <-> promise
