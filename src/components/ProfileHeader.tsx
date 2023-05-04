import { Session } from "@supabase/supabase-js";
import supabase from "./supabaseClient";

interface Props {
  session: Session | null;
}

export default function ProfileHeader({ session }: Props) {
  return (
    <div>
      <div>
        User: <strong>{session?.user?.email}</strong>
      </div>
      <div>
        <button
          onClick={() => {
            supabase.auth.signOut();
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
