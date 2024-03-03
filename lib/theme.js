import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// const fonts = {
//   heading: "Urbanist, Pacifico, sans-serif",
//   body: "Urbanist, Pacifico, sans-serif",
// };

const styles = {
  global: (props) => ({
    "html, body": {
      bg: props.colorMode === "dark" ? "gray.800" : "#FFF2EF",
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
});

export default theme;
