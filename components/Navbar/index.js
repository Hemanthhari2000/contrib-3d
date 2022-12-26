import { Box, Text } from "@chakra-ui/react";
import { kUrbanist } from "../../lib/constants";
import { FadeIn } from "../Animations/Transition/FadeIn";

const Navbar = () => {
	return (
		<Box as="nav" position={"absolute"} top={0} left={0} w={"100%"} zIndex={10}>
			<FadeIn>
				<Text
					className={kUrbanist.className}
					p={20}
					fontSize={30}
					fontWeight={"bold"}
					letterSpacing={1.3}
				>
					Contrib 3D
				</Text>
			</FadeIn>
		</Box>
	);
};

export default Navbar;
