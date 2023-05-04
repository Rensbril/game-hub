import { Session } from "@supabase/supabase-js";
import { AuthAction } from "../state-management/reducers/authReducer";
import supabase from "./supabaseClient";

interface LoginInput {
  email: string;
  password: string;
}

export const login = async ({
  email,
  password,
}: LoginInput): Promise<AuthAction> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    type: "login",
    payload: data.session as Session,
  };
};
