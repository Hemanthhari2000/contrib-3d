'use client';
import TriangleLoader from '@/components/Animations/Loading/DnaLoading';
import { Flex } from '@chakra-ui/react';

export default function ImmersiveViewLoading() {
	return (
		<Flex justifyContent={'center'} alignItems={'center'} w={'full'} h={'full'}>
			<TriangleLoader />
		</Flex>
	);
}
