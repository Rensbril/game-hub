import { Alert, Avatar } from "@chakra-ui/react";
import { Session } from "@supabase/supabase-js";
import supabase from "./supabaseClient";

interface Props {
  session: Session | null;
}

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) <Alert status="error">{error.message}</Alert>;
};

export default function ProfileHeader({ session }: Props) {
  return (
    <Avatar name={session?.user?.email} cursor={"pointer"} onClick={logout} />
  );
}
