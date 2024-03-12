import { motion } from 'framer-motion';

export const FadeIn = ({ children }) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -20 }}
				transition={{ duration: 1.5 }}
			>
				{children}
			</motion.div>
		</>
	);
};
