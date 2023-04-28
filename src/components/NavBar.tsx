import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onsearch: (searchText: string) => void;
}

const NavBar = ({ onsearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onsearch={onsearch} />
      <Text>
        <ColorModeSwitch />
      </Text>
    </HStack>
  );
};

export default NavBar;
