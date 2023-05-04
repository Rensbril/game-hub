import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import ProfileHeader from "./ProfileHeader";
import { Session } from "@supabase/supabase-js";

interface Props {
  onsearch: (searchText: string) => void;
  session: Session | null;
}

const NavBar = ({ onsearch, session }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>
        <ColorModeSwitch />
      </Text>
      <SearchInput onsearch={onsearch} />
      {session ? <ProfileHeader session={session} /> : <Button>Login</Button>}
    </HStack>
  );
};

export default NavBar;
