"use client";

import { Box, Button, Flex, Kbd, Text } from "@chakra-ui/react";
import { useState } from "react";

import { kSecondaryFont } from "@/lib/constants";

export default function Overlay({ showInstructions }) {
  return (
    <Flex
      display={showInstructions ? "flex" : "none"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"absolute"}
      top={"0"}
      left={"0"}
      w={"full"}
      h={"full"}
      backgroundColor={"#1A202C"}
      pointerEvents={"none"}
      zIndex={5}
    >
      <Flex
        width={"400px"}
        height={"300px"}
        backgroundColor={"blackAlpha.500"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        className={kSecondaryFont.className}
        fontWeight={"semibold"}
      >
        <Text fontSize={"4xl"}>Immersive View</Text>
        <Box pt={"20px"}>
          <Text>
            Move: <Kbd>W</Kbd> <Kbd>A</Kbd> <Kbd>S</Kbd> <Kbd>D</Kbd>
          </Text>
          <Text>
            Jump: <Kbd>Space</Kbd>
          </Text>
          <Text>
            Click: <Kbd>Left Click</Kbd>
          </Text>
          <Text>
            Exit: <Kbd>Esc</Kbd>
          </Text>
        </Box>
        <Button
          id="immersive-view-enter-btn"
          pointerEvents={"auto"}
          mt={"20px"}
        >
          Enter View
        </Button>
      </Flex>
    </Flex>
  );
}
