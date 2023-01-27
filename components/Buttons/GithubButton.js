import { Box, Link } from "@chakra-ui/react";
import { GithubIcon } from "../GithubIcon";

export const GithubButton = () => {
	const borderColor = "green.600";
	const hoverColor = "whiteAlpha.200";
	const iconColor = "#68D391";
	return (
		<>
			<Box p={{ base: 5, md: 20 }}>
				<Link
					href={"https://github.com/hemanthhari2000/contrib-3d"}
					isExternal
					title={"Source Code"}
				>
					<Box
						p={2}
						borderRadius={8}
						border={"2px"}
						borderColor={borderColor}
						_hover={{ bg: hoverColor }}
					>
						<GithubIcon color={iconColor} />
					</Box>
				</Link>
			</Box>
		</>
	);
};
