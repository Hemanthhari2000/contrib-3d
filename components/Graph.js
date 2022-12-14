import { useEffect, useState } from "react";
import * as THREE from "three";
import { Tower } from "../lib/tower";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, OrthographicCamera } from "@react-three/drei";
import styles from "../styles/Graph.module.css";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { saveAs } from "file-saver";

const Graph = ({ data, handle }) => {
	let [scene] = useState(() => new THREE.Scene());
	let [group] = useState(() => new THREE.Group());

	useEffect(() => {
		for (let j = 0; j < data.length; j++) {
			for (let i = 0; i < data[j].length; i++) {
				let tower = new Tower(data[j][i]);
				tower.buildTower(group, j, i);
			}
		}
	}, [data, group]);

	scene.add(group);
	return (
		<>
			<Canvas>
				<OrthographicCamera makeDefault zoom={15} position={[100, 100, 100]} />
				<OrbitControls />
				<ambientLight />
				<directionalLight />
				<primitive object={scene} position={[-20, 0, 0]} />
				<DownloadBtn handle={handle} />
			</Canvas>
		</>
	);
};

const DownloadBtn = ({ handle }) => {
	const { scene } = useThree();
	function handleDownloadClick() {
		const exporter = new GLTFExporter();
		exporter.parse(
			scene,
			function (gltfJson) {
				const jsonString = JSON.stringify(gltfJson);
				const blob = new Blob([jsonString], { type: "application/json" });
				saveAs(blob, `${handle}.glb`);
			},
			{ binary: true }
		);
	}
	return (
		<Html as={"div"} fullscreen>
			<button className={styles.download_btn} onClick={handleDownloadClick}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-download"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
					<polyline points="7 10 12 15 17 10"></polyline>
					<line x1="12" y1="15" x2="12" y2="3"></line>
				</svg>
			</button>
		</Html>
	);
};

export default Graph;
