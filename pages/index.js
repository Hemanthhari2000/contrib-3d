import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Input,
	Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/router";
import PageTransition from "../components/Animations/Transition/PageTransition";
import FloatingContribImage from "../components/Animations/FloatingImage";
import { kUltra, kUrbanist } from "../lib/constants";
import Head from "next/head";

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
					<Text
						className={kUltra.className}
						textAlign={"center"}
						fontSize={"55"}
						fontWeight={"bold"}
						letterSpacing={1.5}
						lineHeight={1.6}
						p={5}
					>
						Your Github Contribution <br /> Graph in 3D
					</Text>
					<Box w="80%">
						<FormControl isInvalid={isError}>
							<Input
								size={"lg"}
								placeholder="Enter Github Username"
								value={handle}
								onChange={handleInputChange}
								textAlign={"center"}
							/>
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
									className={kUrbanist.className}
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
