"use client";
import TriangleLoader from "@/components/Animations/Loading/DnaLoading";
import PageTransition from "@/components/Animations/Transition/PageTransition";
import { Flex } from "@chakra-ui/react";

export default function ImmersiveViewLoading() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} w={"full"} h={"full"}>
      <TriangleLoader />
    </Flex>
  );
}
