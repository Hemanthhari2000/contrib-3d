import PageTransition from "../../components/Animations/Transition/PageTransition";
import getContributionsData from "../../lib/getContribution";
import Graph from "../../components/Graph";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

export default function ContribGraph({ data }) {
	return (
		<>
			<PageTransition>
				<div style={{ width: "100vw", height: "100vh" }}>
					<Canvas>
						<OrthographicCamera
							makeDefault
							zoom={15}
							position={[100, 100, 100]}
						/>
						<OrbitControls />
						<ambientLight />
						<directionalLight />
						<Graph data={data} />
					</Canvas>
				</div>
			</PageTransition>
		</>
	);
}

export const getServerSideProps = async ({ params, res }) => {
	const data = await getContributionsData(params.handle);
	res.setHeader("Cache-Control", JSON.stringify(data), "public, max-age=27000");
	return {
		props: {
			data,
		},
	};
};
