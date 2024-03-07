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
  useBreakpointValue,
} from "@chakra-ui/react";
import PageTransition from "@/components/Animations/Transition/PageTransition";
import Navbar from "@/components/Navbar";
import FloatingContribImage from "@/components/Animations/FloatingImage";

import { AtIcon } from "@/components/Icons/AtIcon";
import {
  kTextEnterImmersiveView,
  kPrimaryFont,
  kSecondaryFont,
  kTextViewGeneratedGraph,
  kTextHomePageIntroText,
  kTextHomePageInputPlaceholder,
  kTextHomePageInputErrorMessage,
} from "@/lib/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [isError, setIsError] = useState(false);
  const [contribYear, setContribYear] = useState("2023");
  const isMobileView = useBreakpointValue({
    base: true,
    md: false,
  });

  const handleInputChange = (e) => setHandle(e.target.value);

  const handleOnSubmit = (view_type) => {
    if (!handle) {
      setIsError(true);
    } else {
      view_type === "contrib-view"
        ? router.push(`/contrib-graph/${handle}?year=${contribYear}`)
        : router.push(`/immersive-view/${handle}?year=${contribYear}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleOnSubmit();
    }
  };

  return (
    <>
      <Layout>
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
                className={kPrimaryFont.className}
                textAlign={"center"}
                fontSize={{ base: "30px", md: "45px", lg: "55px" }}
                fontWeight={"bold"}
                letterSpacing={1.5}
                lineHeight={1.6}
                py={5}
              >
                {kTextHomePageIntroText}
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
                    className={kSecondaryFont.className}
                    placeholder={kTextHomePageInputPlaceholder}
                    _placeholder={{ opacity: 1, color: "gray.500" }}
                    value={handle}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
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
                      {kTextHomePageInputErrorMessage}
                    </Flex>
                  </FormErrorMessage>
                )}
                <Flex
                  w={"100%"}
                  justifyContent={"center"}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Button
                    m={{ base: 3, md: 5 }}
                    className={kSecondaryFont.className}
                    variant={isMobileView ? "solid" : "outline"}
                    fontWeight={"medium"}
                    letterSpacing={0.8}
                    colorScheme={"teal"}
                    onClick={() => handleOnSubmit("contrib-view")}
                  >
                    {kTextViewGeneratedGraph}
                  </Button>
                  {isMobileView ? null : (
                    <Button
                      m={{ base: 3, md: 5 }}
                      className={kSecondaryFont.className}
                      fontWeight={"medium"}
                      letterSpacing={0.8}
                      colorScheme={"teal"}
                      onClick={() => handleOnSubmit("immersive-view")}
                    >
                      {kTextEnterImmersiveView}
                    </Button>
                  )}
                </Flex>
              </FormControl>
            </Box>
            <FloatingContribImage src="images/contrib.png" width="350px" />
          </Flex>
        </PageTransition>
      </Layout>
    </>
  );
}
