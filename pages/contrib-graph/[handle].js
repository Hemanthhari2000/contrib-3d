import PageTransition from "../../components/Animations/Transition/PageTransition";
import getContributionsData from "../../lib/getContribution";
import Graph from "../../components/Graph";

import { Box } from "@chakra-ui/react";

export default function ContribGraph({ data, handle }) {
	return (
		<>
			<PageTransition>
				<Box style={{ width: "100vw", height: "100vh" }}>
					<Graph data={data} handle={handle} />
				</Box>
			</PageTransition>
		</>
	);
}

export const getServerSideProps = async ({ params, res }) => {
	const data = await getContributionsData(params.handle);
	const handle = params.handle;
	res.setHeader("Cache-Control", JSON.stringify(data), "public, max-age=27000");
	return {
		props: {
			data,
			handle,
		},
	};
};
