import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/router";
import PageTransition from "../components/Animations/Transition/PageTransition";
import FloatingContribImage from "../components/Animations/FloatingImage";

export default function Home() {
  const router = useRouter();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let handle = event.target[0].value;
    router.push(`/contrib-graph/${handle}`);
  };

  return (
    <>
      <PageTransition>
        <Flex
          width={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text textAlign={"center"} fontSize={"50"} fontWeight={"bold"} p={5}>
            Your Github Contribution <br /> Graph in 3D
          </Text>
          <Box w="80%">
            <form
              onSubmit={handleOnSubmit}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FormControl isRequired>
                <Input size={"lg"} placeholder="Enter your Github Username" />
              </FormControl>
              <Button m={5} colorScheme={"teal"} type="submit">
                Generate Graph
              </Button>
            </form>
          </Box>
          <FloatingContribImage src="images/contrib.png" width="350px" />
        </Flex>
      </PageTransition>
    </>
  );
}
