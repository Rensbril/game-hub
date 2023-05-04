import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <SunIcon />
    </HStack>
  );
};

export default ColorModeSwitch;
