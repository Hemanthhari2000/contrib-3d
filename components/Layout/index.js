'use client';

import { Container, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
	return (
		<>
			<Container
				className="Layout-wrapper"
				maxW={'container.lg'}
				h={'900px'}
				pt={{ base: '0.1rem', md: '15.1rem' }}
			>
				<Flex
					w={'full'}
					h={'full'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					{children}
				</Flex>
			</Container>
		</>
	);
};

export default Layout;
