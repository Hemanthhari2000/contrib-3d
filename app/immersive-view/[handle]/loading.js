'use client';
import { Flex } from '@chakra-ui/react';

import TriangleLoader from '@/components/Animations/Loading/DnaLoading';

export default function ImmersiveViewLoading() {
	return (
		<Flex justifyContent={'center'} alignItems={'center'} w={'full'} h={'full'}>
			<TriangleLoader />
		</Flex>
	);
}
