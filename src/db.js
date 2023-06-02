import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("😁 connect to DB");
const handleError = (error) => console.log("DB Error", error);
db.on("error", (error) => handleError);
db.once("open", handleOpen);
