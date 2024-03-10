import { Box, Link, useColorModeValue } from '@chakra-ui/react';

import { GithubIcon } from '../Icons/GithubIcon';

export const GithubButton = () => {
	const iconColor = '#68D391';
	const hoverColor = useColorModeValue('green.100', 'whiteAlpha.200');
	const fillColor = useColorModeValue(iconColor, 'none');
	const borderColor = useColorModeValue(iconColor, 'green.600');
	return (
		<>
			<Box>
				<Link
					href={'https://github.com/hemanthhari2000/contrib-3d'}
					isExternal
					title={'Source Code'}
				>
					<Box
						p={2}
						borderRadius={8}
						border={'2px'}
						borderColor={borderColor}
						_hover={{ bg: hoverColor }}
					>
						<GithubIcon color={iconColor} fill={fillColor} />
					</Box>
				</Link>
			</Box>
		</>
	);
};
