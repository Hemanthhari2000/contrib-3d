import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import PageTransition from "../components/Animations/Transition/PageTransition";
import FloatingContribImage from "../components/Animations/FloatingImage";
import { kPrimaryFont, kSecondaryFont } from "../lib/constants";
import { AtIcon } from "../components/AtIcon";

export default function Home() {
	const router = useRouter();
	const [handle, setHandle] = useState("");
	const [isError, setIsError] = useState(false);

	const handleInputChange = (e) => setHandle(e.target.value);

	const handleOnSubmit = () => {
		// VALIDATION
		if (!handle) {
			setIsError(true);
		} else {
			router.push(`/contrib-graph/${handle}`);
		}
	};

	return (
		<>
			<Head>
				<title>{`Contrib 3D`}</title>
			</Head>
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
