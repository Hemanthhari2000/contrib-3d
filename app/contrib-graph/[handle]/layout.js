"use client";

import { Container, Flex } from "@chakra-ui/react";

export default function ContribViewLayout({ children }) {
  return (
    <>
      <Container
        className="ContribViewLayout-wrapper"
        maxW={"container.lg"}
        h={"900px"}
      >
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
}
