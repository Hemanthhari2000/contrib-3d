import PageTransition from "../../components/Animations/Transition/PageTransition";
import getContributionsData from "../../lib/getContribution";
import Graph from "../../components/Graph";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Lighting from "../../components/Lighting";
import Head from "next/head";
import { UserCannotBeFound } from "../../components/Error";

export default function ContribGraph({ data, handle }) {
	return (
		<>
			<Head>
				<title>Contrib 3D - {handle}</title>
			</Head>
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
								zoom={25}
								position={[90, 50, 70]}
							/>
							<OrbitControls />
							<Lighting />
							<Graph data={data} handle={handle} />
						</Canvas>
					)}
				</div>
			</PageTransition>
		</>
	);
}

export const getServerSideProps = async ({ params, res }) => {
	const handle = params.handle;
	const data = await getContributionsData(handle);

	return {
		props: {
			data,
			handle,
		},
	};
};
