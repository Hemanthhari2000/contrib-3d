'use client';

import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import Lighting from '../../components/Lighting';

import Navbar from '../Navbar';
import PageTransition from '../Animations/Transition/PageTransition';
import UserCannotBeFound from '../Error';
import Graph from '.';
import { kTextUserCannotBeFound } from '@/lib/constants';

export default function GraphView({ data }) {
	let zoomValue = useBreakpointValue({ base: 10, md: 25 });
	let user = data
		? {
				username: data.username,
				year: data.year
			}
		: null;
	return (
		<>
			<Navbar data={user} />
			<PageTransition>
				<Box width="100vw" height="100vh" overflowX="hidden" overflowY="hidden">
					{!data ? (
						<UserCannotBeFound title={kTextUserCannotBeFound} />
					) : (
						<Canvas>
							<OrthographicCamera
								makeDefault
								zoom={zoomValue}
								position={[90, 50, 70]}
							/>
							<OrbitControls />
							<Lighting />
							<Graph data={data} />
						</Canvas>
					)}
				</Box>
			</PageTransition>
		</>
	);
}
