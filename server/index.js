import { config } from "dotenv";
import express from "express";
import cors from "cors";
config({ quiet: true });

import authenticate from "./middlewares/authenticate.js";
import erroHandler from "./middlewares/error-handler.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => (console.log(req.path, req.method), next()));
app.use(authenticate);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the ResumeAIMaker API" });
});

app.use(erroHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
