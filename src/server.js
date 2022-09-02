import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev"); // morgan is a MIDDLEWARE
const PORT = 4000;

app.use(logger);

const globalRouter = express.Router();
globalRouter.get("/", (req, res) => res.send("home"));

const videoRouter = express.Router();
videoRouter.get("/watch", (req, res) => res.send("watch video"));

const userRouter = express.Router();
userRouter.get("/edit", (req, res) => res.send("edit video"));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
