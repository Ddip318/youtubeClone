import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddlewate } from "./middlewares";

const app = express();
const logger = morgan("dev"); // 추가정인 정보를 주는 미들웨어

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true })); //express가 form과 그 value를 이해하도록 함

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 200000, //200seconds
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    next();
  });
});
app.use(localsMiddlewate);
app.use("/uploads", express.static("uploads")); //불러올 폴더 위치 지정
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
