import * as THREE from "three";

class Tower {
	constructor(contributionData, maxCount) {
		this.contributionData = contributionData;
		this.maxCount = maxCount;
		this.xSpace = 1;
		this.zSpace = 1;
		this.offset = 0.1;
	}

	createTower = () => {
		const towerGeometry = new THREE.BoxGeometry(1, 1, 1);
		towerGeometry.translate(0, 0.5, 0);
		const towerMaterial = new THREE.MeshPhongMaterial({
			color: this.contributionData.color,
		});
		const tower = new THREE.Mesh(towerGeometry, towerMaterial);
		tower.scale.y =
			this.contributionData.count === 0
				? 0.1
				: this.maxCount >= 10
				? (this.contributionData.count / this.maxCount) * 15
				: this.contributionData.count;
		return tower;
	};

	createBase = () => {
		const baseGeometry = new THREE.BoxGeometry(1, 0.1, 1);
		baseGeometry.translate(0, 0.05, 0);
		const baseMaterial = new THREE.MeshStandardMaterial({
			roughness: 0.9,
			color: "#000000",
		});
		const towerBase = new THREE.Mesh(baseGeometry, baseMaterial);

		return towerBase;
	};

	buildTower = (scene, xFactor, zFactor) => {
		if (this.contributionData.count === 0) {
			const mesh = this.createBase();
			mesh.position.x = (this.xSpace + this.offset) * xFactor;
			mesh.position.z = (this.zSpace + this.offset) * zFactor;
			return scene.add(mesh);
		}
		const tower = this.createTower();
		tower.position.x = (this.xSpace + this.offset) * xFactor;
		tower.position.z = (this.zSpace + this.offset) * zFactor;
		return scene.add(tower);
	};
}

export { Tower };