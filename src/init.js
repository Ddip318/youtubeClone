import "dotenv/config";
import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () => console.log(`Server listening on ${PORT}`);
app.listen(PORT, handleListening);
// callback : 대기를 하고 Then(render이후 마지막)실행 <-> promise
