import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/dotenv.js";
import AuthRouter from "./routes/auth.routes.js";
import cors from "cors";

// Basic server with express
const app = express();

// Middleware
app.use(express.json()); // JSON parser
app.use(cookieParser()); // Cookie parser
app.use("/api/v1/auth", AuthRouter);
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.json({ success: true, message: "API is running" });
});

const port = PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
