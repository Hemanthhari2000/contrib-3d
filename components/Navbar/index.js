'use client';

import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	Text,
	useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
	kPrimaryFont,
	kSecondaryFont,
	kTextLogoText
} from '../../lib/constants';
import { FadeIn } from '../Animations/Transition/FadeIn';
import ColorModeButton from '../Buttons/ColorModeButton';
import { GithubButton } from '../Buttons/GithubButton';

const Navbar = ({ data }) => {
	let imageBoxSize = useBreakpointValue({ base: '50px', md: '80px' });
	const isMobileView = useBreakpointValue({
		base: true,
		md: false
	});
	const [isImmersiveViewLoading, setisImmersiveViewLoading] = useState(false);
	const router = useRouter();

	return (
		<Box as="nav" position={'absolute'} top={0} left={0} w={'100%'} zIndex={10}>
			<FadeIn>
				<Box w={'full'}>
					<Flex justifyContent={'space-between'} alignItems={'center'}>
						<HStack p={{ base: 5, md: 20 }} width={'fit-content'}>
							<Link href={'/'}>
								<HStack>
									<Image
										boxSize={imageBoxSize}
										objectFit="cover"
										src={'/logo.png'}
										alt={'logo'}
									/>
									{!data ? (
										<Text
											className={kPrimaryFont.className}
											fontSize={{ base: 20, md: 30 }}
											fontWeight={'semibold'}
											letterSpacing={1.5}
										>
											{kTextLogoText}
										</Text>
									) : (
										<Text
											className={kSecondaryFont.className}
											fontSize={{ base: 20, md: 30 }}
										>
											{data.username}
											{`'s`} {data.year} Graph
										</Text>
									)}
								</HStack>
							</Link>
						</HStack>
						<HStack mr={{ base: 5, md: 20 }}>
							{isMobileView ? null : !data ? null : (
								<Button
									isLoading={isImmersiveViewLoading}
									mr={{ base: 3, md: 5 }}
									className={kSecondaryFont.className}
									fontWeight={'medium'}
									letterSpacing={0.8}
									colorScheme={'teal'}
									onClick={() => {
										setisImmersiveViewLoading(true);
										router.push(
											`/immersive-view/${data.username}?year=${data.year}`
										);
									}}
								>
									View Immersive View
								</Button>
							)}
							<ColorModeButton />
							<GithubButton />
						</HStack>
					</Flex>
				</Box>
			</FadeIn>
		</Box>
	);
};

export default Navbar;
