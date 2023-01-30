import PageTransition from "../../components/Animations/Transition/PageTransition";
import Graph from "../../components/Graph";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Lighting from "../../components/Lighting";
import Head from "next/head";
import { UserCannotBeFound } from "../../components/Error";
import { fetchContribData } from "../../lib/fetchGithubData";
import { useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";

export default function ContribGraph({ data }) {
	let zoomValue = useBreakpointValue({ base: 10, md: 25 });
	let user = data
		? {
				username: data.username,
				year: data.year,
		  }
		: null;
	return (
		<>
			<Head>
				<title>{`Contrib 3D - ${user ? user.username : ""}`}</title>
			</Head>
			<Navbar data={user} />
			<PageTransition>
				<div
					style={{
						width: "100vw",
						height: "100vh",
						overflowX: "hidden",
						overflowY: "hidden",
					}}
				>
					{!data ? (
						<UserCannotBeFound
							title={"Cannot find the user, Please check your github handle."}
						/>
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
				</div>
			</PageTransition>
		</>
	);
}

export const getServerSideProps = async ({ query }) => {
	const handle = query.handle;
	const year = query.year;
	let data = await fetchContribData(handle, year);
	return {
		props: {
			data,
		},
	};
};
