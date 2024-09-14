import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';

const app = express();
//settings
app.set("port", process.env.PORT || 4000);

//middleware
const corsOptions = {};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to server" });
});

app.use("/api/logs", router);

export default app;
