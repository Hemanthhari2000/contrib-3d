import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import FiMoon from "../Icons/FiMoon";
import FiSun from "../Icons/FiSun";

export const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        data-testid="color_mode_toggle"
        icon={useColorModeValue(<FiMoon />, <FiSun />)}
        size={"md"}
        colorScheme={colorMode === "light" ? "purple" : "yellow"}
        onClick={toggleColorMode}
      />
    </>
  );
};

export default ColorModeButton;
