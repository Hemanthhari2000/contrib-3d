import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import theme from "../lib/theme";
import Router from "next/router";
import TriangleLoader from "../components/Animations/Loading/DnaLoading";

function MyApp({ Component, pageProps, router }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const start = () => {
			console.log("start");
			setLoading(true);
		};
		const end = () => {
			console.log("finished");
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Layout router={router}>
				<AnimatePresence
					mode="wait"
					initial={true}
					onExitComplete={() => {
						if (typeof window !== "undefined") {
							window.scrollTo({ top: 0 });
						}
					}}
				>
					{loading ? (
						<TriangleLoader />
					) : (
						<Component {...pageProps} key={router.route} />
					)}
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
