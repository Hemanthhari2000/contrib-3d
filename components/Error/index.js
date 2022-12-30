import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Lottie from "react-lottie";
import { kUrbanist } from "../../lib/constants";
import animationData from "../../public/cannot_be_found.json";

export const UserCannotBeFound = ({ title }) => {
	return (
		<Flex
			h={"100%"}
			w={"100%"}
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
		>
			<Box>
				<Lottie
					options={{
						loop: true,
						autoplay: true,
						animationData: animationData,
					}}
					width={"500px"}
				/>
			</Box>
			<Text
				className={kUrbanist.className}
				fontSize={20}
				lineHeight={1.5}
				letterSpacing={0.9}
			>
				{title}
			</Text>
		</Flex>
	);
};
