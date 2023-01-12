import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { kSecondaryFont } from "../../lib/constants";
import { FadeIn } from "../Animations/Transition/FadeIn";

const Navbar = () => {
	return (
		<Box as="nav" position={"absolute"} top={0} left={0} w={"100%"} zIndex={10}>
			<FadeIn>
				<HStack p={20} width={"fit-content"}>
					<Link href={"/"}>
						<HStack>
							<Image
								boxSize="80px"
								objectFit="cover"
								src={"/logo.png"}
								alt={"logo"}
							/>
							<Text
								className={kSecondaryFont.className}
								fontSize={30}
								fontWeight={"bold"}
								letterSpacing={1.3}
							>
								Contrib 3D
							</Text>
						</HStack>
					</Link>
				</HStack>
			</FadeIn>
		</Box>
	);
};

export default Navbar;
