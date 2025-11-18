import express from "express";
import {
  signup,
  oauth,
  signout,
  signin,
} from "../controllers/authController.js";

const AuthRouter = express.Router();

// Route for signing up with email and password
AuthRouter.post("/signup", signup);

// Route for signing in with email and password
AuthRouter.post("/signin", signin);

// Route for signing out
AuthRouter.post("/signout", signout);

// Route for signing in with OAuth
AuthRouter.post("/oauth/signin", oauth);

export default AuthRouter;
