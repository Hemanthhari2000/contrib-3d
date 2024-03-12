'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

export function Providers({ children }) {
	return (
		<AnimatePresence
			mode="wait"
			initial={true}
			onExitComplete={() => {
				if (typeof window !== 'undefined') {
					window.scrollTo({ top: 0 });
				}
			}}
		>
			<ChakraProvider>{children}</ChakraProvider>;
		</AnimatePresence>
	);
}
