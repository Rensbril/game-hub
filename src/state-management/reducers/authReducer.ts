import { Session } from "@supabase/supabase-js";

interface LoginAction {
  type: "login";
  payload: Session;
}

interface LogoutAction {
  type: "logout";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (
  state: Session | null,
  action: AuthAction
): Session | null => {
  switch (action.type) {
    case "login":
      return action.payload;
    case "logout":
      return null;
    default:
      return state;
  }
};

export default authReducer;
