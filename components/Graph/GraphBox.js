'use client';
import * as THREE from 'three';

import BaseBox from '../ImmersiveView/Box';
import {
	getSaturatedColorCodesBasedOnCount,
	roundOff
} from '@/lib/helpers/immersiveViewHelper';

const GraphBox = ({ data }) => {
	var contribTowers = [];

	let pos = new THREE.Vector3(-27.4, 0, -3.3);
	for (let j = 0; j < data.contributions.length; j++) {
		for (let i = 0; i < data.contributions[j].length; i++) {
			let contributionCount = data.contributions[j][i].contributionCount;
			let towerHeight = (contributionCount % 8) + 0.1;
			var key = `${pos.x}, ${pos.z}, ${i}, ${j}`;

			pos.set(roundOff(-27.4 + j * 1.1), 0, roundOff(-3.3 + i * 1.1));

			contribTowers.push(
				<BaseBox
					key={key}
					args={[1, towerHeight, 1]}
					position={[pos.x, towerHeight / 2, pos.z]}
					color={getSaturatedColorCodesBasedOnCount(contributionCount)}
					roughness={0.9}
				></BaseBox>
			);
		}
	}
	return <>{contribTowers}</>;
};

export default GraphBox;
