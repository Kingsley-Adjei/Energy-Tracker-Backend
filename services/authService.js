import supabase from "../utils/supabaseClient.js";

export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  return true;
};

export const signInWithOAuthService = async ({
  idToken,
  email,
  name,
  profileImage,
}) => {
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: "google",
    token: idToken,
  });

  if (error) throw error;

  return {
    success: true,
    token: data.session.access_token,
    user: {
      id: data.user.id,
      email,
      name,
      profileImage,
    },
    isNewUser: data.user.created_at === data.user.updated_at,
  };
};
