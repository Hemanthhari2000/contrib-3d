import { Box, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { kSecondaryFont } from "../../lib/constants";
import { FadeIn } from "../Animations/Transition/FadeIn";

const Navbar = ({ data }) => {
	let imageBoxSize = useBreakpointValue({ base: "50px", md: "80px" });
	return (
		<Box as="nav" position={"absolute"} top={0} left={0} w={"100%"} zIndex={10}>
			<FadeIn>
				{data ? (
					<Box w={"full"}>
						<HStack p={{ base: 5, md: 20 }}>
							<Link href={"/"}>
								<Image
									boxSize={imageBoxSize}
									objectFit="cover"
									src={"/logo.png"}
									alt={"logo"}
								/>
							</Link>
							<Text
								className={kSecondaryFont.className}
								fontSize={{ base: 20, md: 30 }}
							>
								{data}
								{`'s`} Graph
							</Text>
						</HStack>
					</Box>
				) : (
					<HStack p={{ base: 5, md: 20 }} width={"fit-content"}>
						<Link href={"/"}>
							<HStack>
								<Image
									boxSize={imageBoxSize}
									objectFit="cover"
									src={"/logo.png"}
									alt={"logo"}
								/>
								<Text
									className={kSecondaryFont.className}
									fontSize={{ base: 20, md: 30 }}
									fontWeight={"semibold"}
									letterSpacing={1.5}
								>
									Contrib 3D
								</Text>
							</HStack>
						</Link>
					</HStack>
				)}
			</FadeIn>
		</Box>
	);
};

export default Navbar;
