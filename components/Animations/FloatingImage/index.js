import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const FloatingImage = ({ src = 'images/contrib.png', width = '350px' }) => {
	return (
		<>
			<motion.div
				initial={{ y: 30 }}
				animate={{ y: 0 }}
				transition={{
					ease: 'easeInOut',
					duration: 2,
					repeat: Infinity,
					repeatType: 'reverse'
				}}
			>
				<Image alt="img" src={src} w={width} />
			</motion.div>
		</>
	);
};

export default FloatingImage;
