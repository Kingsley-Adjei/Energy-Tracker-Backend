import {
  signInWithOAuth,
  signIn,
  signUp,
  signOut,
} from "../services/authService.js";

export const signup = async (req, res) => {
  try {
    const user = await signUp(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during signup", error: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const token = await signIn(req.body);
    res.status(200).json({ message: "User signed in successfully", token });
  } catch (error) {
    res
      .status(401)
      .json({ message: "Invalid credentials", error: error.message });
  }
};

export const signout = async (req, res) => {
  try {
    await signOut(req.user);
    res.status(200).json({ message: "User signed out successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during signout", error: error.message });
  }
};

export const oauth = async (req, res) => {
  try {
    const user = await signInWithOAuth(req.body);
    res.status(200).json({ message: "OAuth successful", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during OAuth", error: error.message });
  }
};
