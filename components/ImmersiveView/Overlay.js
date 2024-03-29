'use client';

import { Box, Button, Flex, Kbd, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import {
	kSecondaryFont,
	kTextImmersiveViewOverlayHeading,
	kTextOverlayBackBtn,
	kTextOverlayEnterViewBtn
} from '@/lib/constants';

export default function Overlay({ showInstructions }) {
	const router = useRouter();
	return (
		<Flex
			display={showInstructions ? 'flex' : 'none'}
			justifyContent={'center'}
			alignItems={'center'}
			position={'absolute'}
			top={'0'}
			left={'0'}
			w={'full'}
			h={'full'}
			backgroundColor={'#1A202C'}
			pointerEvents={'none'}
			zIndex={5}
		>
			<Flex
				width={'400px'}
				height={'300px'}
				backgroundColor={'blackAlpha.500'}
				justifyContent={'center'}
				alignItems={'center'}
				direction={'column'}
				className={kSecondaryFont.className}
				fontWeight={'semibold'}
			>
				<Text fontSize={'4xl'}>{kTextImmersiveViewOverlayHeading}</Text>
				<Box pt={'20px'}>
					<Text>
						Move: <Kbd>W</Kbd> <Kbd>A</Kbd> <Kbd>S</Kbd> <Kbd>D</Kbd>
					</Text>
					<Text>
						Jump: <Kbd>Space</Kbd>
					</Text>
					<Text>
						Exit: <Kbd>Esc</Kbd>
					</Text>
				</Box>
				<Flex mt={'20px'} justifyContent={'space-between'}>
					<Button
						id="immersive-view-enter-btn"
						pointerEvents={'auto'}
						variant={'solid'}
						colorScheme={'teal'}
					>
						{kTextOverlayEnterViewBtn}
					</Button>
					<Button
						ml={'20px'}
						pointerEvents={'auto'}
						variant={'outline'}
						colorScheme={'teal'}
						onClick={() => router.push('/')}
					>
						{kTextOverlayBackBtn}
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
