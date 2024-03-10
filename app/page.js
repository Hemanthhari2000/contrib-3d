'use client';

import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Select,
	Text,
	useBreakpointValue
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import FloatingContribImage from '@/components/Animations/FloatingImage';
import PageTransition from '@/components/Animations/Transition/PageTransition';
import { AtIcon } from '@/components/Icons/AtIcon';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import {
	kPrimaryFont,
	kSecondaryFont,
	kTextEnterImmersiveView,
	kTextHomePageInputErrorMessage,
	kTextHomePageInputPlaceholder,
	kTextHomePageIntroText,
	kTextViewGeneratedGraph} from '@/lib/constants';
import { dateRangeOptions } from '@/lib/helpers/homePageHelper';

export default function Home() {
	const router = useRouter();

	const [handle, setHandle] = useState('');
	const [isError, setIsError] = useState(false);
	const [contribYear, setContribYear] = useState(
		new Date().getFullYear().toString()
	);
	const [isContribGraphLoading, setIsContribGraphLoading] = useState(false);
	const [isImmersiveViewLoading, setisImmersiveViewLoading] = useState(false);
	const isMobileView = useBreakpointValue({
		base: true,
		md: false
	});

	const handleInputChange = e => setHandle(e.target.value);

	const handleOnSubmit = view_type => {
		if (!handle) {
			setIsError(true);
		} else if (view_type === 'contrib-view') {
			setIsContribGraphLoading(true);
			router.push(`/contrib-graph/${handle}?year=${contribYear}`);
		} else {
			setisImmersiveViewLoading(true);
			router.push(`/immersive-view/${handle}?year=${contribYear}`);
		}
	};

	const handleKeyDown = event => {
		if (event.keyCode === 13) {
			handleOnSubmit();
		}
	};

	return (
		<>
			<Layout>
				<Navbar />
				<PageTransition>
					<Flex
						width={'full'}
						justifyContent={'center'}
						alignItems={'center'}
						flexDirection={'column'}
					>
						<Box w={'75%'}>
							<Text
								className={kPrimaryFont.className}
								textAlign={'center'}
								fontSize={{ base: '30px', md: '45px', lg: '55px' }}
								fontWeight={'bold'}
								letterSpacing={1.5}
								lineHeight={1.6}
								py={5}
							>
								{kTextHomePageIntroText}
							</Text>
						</Box>
						<Box w="80%">
							<FormControl isInvalid={isError}>
								<InputGroup size={'lg'}>
									<InputLeftElement size={'lg'} pointerEvents="none">
										<AtIcon />
									</InputLeftElement>
									<Input
										type={'text'}
										className={kSecondaryFont.className}
										placeholder={kTextHomePageInputPlaceholder}
										_placeholder={{ opacity: 1, color: 'gray.500' }}
										value={handle}
										onChange={handleInputChange}
										onKeyDown={handleKeyDown}
									/>
									<InputRightElement width="5.8rem">
										<Select
											size={'lg'}
											defaultValue={contribYear}
											onChange={e =>
												setContribYear(e.target.selectedOptions[0].value)
											}
										>
											{dateRangeOptions()}
										</Select>
									</InputRightElement>
								</InputGroup>

								{isError && (
									<FormErrorMessage>
										<Flex w={'100%'} justifyContent={'center'}>
											{kTextHomePageInputErrorMessage}
										</Flex>
									</FormErrorMessage>
								)}
								<Flex
									w={'100%'}
									justifyContent={'center'}
									flexDirection={{ base: 'column', md: 'row' }}
								>
									<Button
										isLoading={isContribGraphLoading}
										m={{ base: 3, md: 5 }}
										className={kSecondaryFont.className}
										variant={isMobileView ? 'solid' : 'outline'}
										fontWeight={'medium'}
										letterSpacing={0.8}
										colorScheme={'teal'}
										onClick={() => handleOnSubmit('contrib-view')}
									>
										{kTextViewGeneratedGraph}
									</Button>
									{isMobileView ? null : (
										<Button
											isLoading={isImmersiveViewLoading}
											m={{ base: 3, md: 5 }}
											className={kSecondaryFont.className}
											fontWeight={'medium'}
											letterSpacing={0.8}
											colorScheme={'teal'}
											onClick={() => handleOnSubmit('immersive-view')}
										>
											{kTextEnterImmersiveView}
										</Button>
									)}
								</Flex>
							</FormControl>
						</Box>
						<FloatingContribImage src="images/contrib.png" width="350px" />
					</Flex>
				</PageTransition>
			</Layout>
		</>
	);
}
