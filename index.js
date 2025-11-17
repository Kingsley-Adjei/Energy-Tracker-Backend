import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/dotenv.js";
import AuthRouter from "./routes/auth.routes.js";

// Basic server with express
const app = express();

// Middleware
app.use(express.json()); // JSON parser
app.use(cookieParser()); // Cookie parser
app.use("api/auth", AuthRouter);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
