import { Providers } from './providers';

export const metadata = {
	title: 'Contrib 3D',
	description: 'Github Contributions in 3D Model'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				style={{
					margin: '0',
					padding: '0',
					boxSizing: 'border-box',
					height: '100vh'
				}}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
