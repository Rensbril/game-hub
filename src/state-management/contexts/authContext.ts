import { Session } from "@supabase/supabase-js";
import { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";
import React from "react";

interface AuthContextType {
  session: Session | null;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
