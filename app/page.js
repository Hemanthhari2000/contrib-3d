"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Select,
} from "@chakra-ui/react";
import PageTransition from "@/components/Animations/Transition/PageTransition";
import Navbar from "@/components/Navbar";
import FloatingContribImage from "@/components/Animations/FloatingImage";

import { AtIcon } from "@/components/AtIcon";
import { kPrimaryFont, kSecondaryFont } from "@/lib/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [isError, setIsError] = useState(false);
  const [contribYear, setContribYear] = useState("2023");

  const handleInputChange = (e) => setHandle(e.target.value);

  const handleOnSubmit = () => {
    if (!handle) {
      setIsError(true);
    } else {
      router.push(`/contrib-graph/${handle}?year=${contribYear}`);
    }
  };

  return (
    <>
      <Navbar />
      <PageTransition>
        <Flex
          width={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box w={"75%"}>
            <Text
              className={kPrimaryFont.variable}
              textAlign={"center"}
              fontSize={{ base: "30px", md: "45px", lg: "55px" }}
              fontWeight={"bold"}
              letterSpacing={1.5}
              lineHeight={1.6}
              py={5}
            >
              Your Github Contribution Graph in 3D
            </Text>
          </Box>
          <Box w="80%">
            <FormControl isInvalid={isError}>
              <InputGroup size={"lg"}>
                <InputLeftElement size={"lg"} pointerEvents="none">
                  <AtIcon />
                </InputLeftElement>
                <Input
                  type={"text"}
                  fontFamily={kSecondaryFont.className}
                  placeholder="github-username"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  value={handle}
                  onChange={handleInputChange}
                />
                <InputRightElement width="5.8rem">
                  <Select
                    size={"lg"}
                    defaultValue={"2023"}
                    onChange={(e) =>
                      setContribYear(e.target.selectedOptions[0].value)
                    }
                  >
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </Select>
                </InputRightElement>
              </InputGroup>

              {isError && (
                <FormErrorMessage>
                  <Flex w={"100%"} justifyContent={"center"}>
                    Github Handle is Required.
                  </Flex>
                </FormErrorMessage>
              )}
              <Flex w={"100%"} justifyContent={"center"}>
                <Button
                  m={5}
                  className={kSecondaryFont.className}
                  fontWeight={"medium"}
                  letterSpacing={0.8}
                  colorScheme={"teal"}
                  onClick={handleOnSubmit}
                >
                  Generate Graph
                </Button>
              </Flex>
            </FormControl>
          </Box>
          <FloatingContribImage src="images/contrib.png" width="350px" />
        </Flex>
      </PageTransition>
    </>
  );
}
