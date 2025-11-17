import supabase from "../utils/supabaseClient.js";

export default supabase;
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
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const signInWithOAuth = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });
  if (error) throw error;
  return data;
};
