import { Container, Flex } from "@chakra-ui/react";

const Layout = ({ children, router }) => {
  return (
    <>
      <Container maxW={"container.lg"} h={"900px"} pt={16}>
        <Flex
          w={"full"}
          h={"full"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {children}
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
