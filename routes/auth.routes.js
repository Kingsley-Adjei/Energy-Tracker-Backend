import express from "express";
import {
  signup,
  oauth,
  signout,
  signin,
} from "../controllers/authController.js";
import {
  signInSchema,
  signInWithOAuthSchema,
  signUpSchema,
} from "../validations/auth.validation.js";
import { validate } from "../middlewares/validate.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const AuthRouter = express.Router();

// Route for signing up with email and password
AuthRouter.post("/signup", validate(signUpSchema), signup);

// Route for signing in with email and password
AuthRouter.post("/signin", validate(signInSchema), signin);

// Route for signing out
AuthRouter.post("/signout", authMiddleware, signout);

// Route for signing in with OAuth
AuthRouter.post("/oauth/signin", validate(signInWithOAuthSchema), oauth);

export default AuthRouter;
