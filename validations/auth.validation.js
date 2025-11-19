import Joi from "joi";
export const signUpSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).max(20).trim().required(),
});

export const signInSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
});

export const signInWithOAuthSchema = Joi.object({
  provider: Joi.string().valid("google").required(),
});
