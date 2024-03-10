import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true
};

const styles = {
	global: props => ({
		'html, body': {
			bg: props.colorMode === 'dark' ? 'gray.800' : '#FFF2EF'
		}
	})
};

const theme = extendTheme({
	config,
	styles
});

export default theme;
