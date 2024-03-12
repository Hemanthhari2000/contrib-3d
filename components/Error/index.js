import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Lottie from 'react-lottie';

import { kSecondaryFont } from '../../lib/constants';
import animationData from '../../public/cannot_be_found.json';

const UserCannotBeFound = ({ title }) => {
	return (
		<Flex
			h={'100%'}
			w={'100%'}
			justifyContent={'center'}
			alignItems={'center'}
			flexDirection={'column'}
		>
			<Box>
				<Link href={'/'}>
					<Lottie
						options={{
							loop: true,
							autoplay: true,
							animationData: animationData
						}}
						width={'500px'}
					/>
				</Link>
			</Box>
			<Text
				className={kSecondaryFont.className}
				fontSize={20}
				lineHeight={1.5}
				letterSpacing={0.9}
			>
				{title}
			</Text>
		</Flex>
	);
};

export default UserCannotBeFound;
