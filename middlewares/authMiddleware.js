import supabase from "../utils/supabaseClient.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Missing or invalid token" });
    }

    const token = authHeader.split(" ")[1];

    // Verify the token with Supabase
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    // Attach user info to req.user
    req.user = user;

    next();
  } catch (err) {
    console.error("Error in authMiddleware:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export default authMiddleware;
