import * as THREE from "three";
import { Constants } from "../utils/constants";

const createTowerMaterial = () => {
  return new THREE.MeshPhongMaterial({ color: Constants.towerColor });
};
const createTowerGeometry = () => {
  return new THREE.BoxGeometry(
    Constants.towerSize,
    Constants.towerSize,
    Constants.towerSize
  );
};
const createBaseMaterial = () => {
  return new THREE.BoxGeometry(
    Constants.towerSize,
    Constants.towerSize * 0.1,
    Constants.towerSize
  );
};
const createBaseGeometry = () => {
  return new THREE.MeshPhongMaterial({ color: Constants.baseColor });
};

// const createBase = (scene) => {
//   const baseGeometry = createBaseMaterial();
//   baseGeometry.translate(0, 0.05, 0);
//   const baseMaterial = createBaseGeometry();
//   const towerBase = new THREE.Mesh(baseGeometry, baseMaterial);

//   scene.add(towerBase);
//   return scene;
// };

// const createTower = (scene) => {
//   const towerGeometry = createTowerGeometry();
//   towerGeometry.translate(0, 0.5, 0);
//   const towerMaterial = createTowerMaterial();
//   const tower = new THREE.Mesh(towerGeometry, towerMaterial);
//   tower.scale.y = 2;

//   scene.add(tower);
//   return scene;
// };

class Tower {
  constructor(contributionData) {
    this.contributionData = contributionData;
    this.xSpace = 1;
    this.zSpace = 1;
    this.offset = 0.1;
  }
  createTower = (scene) => {
    const towerGeometry = new THREE.BoxGeometry(1, 1, 1);
    towerGeometry.translate(0, 0.5, 0);
    const towerMaterial = new THREE.MeshPhongMaterial({
      color: this.contributionData.color,
    });
    const tower = new THREE.Mesh(towerGeometry, towerMaterial);
    tower.scale.y =
      this.contributionData.contributionCount === 0
        ? 0.1
        : this.contributionData.contributionCount;
    // console.log(this.contributionData.contributionCount);
    return tower;
  };
  createBase = (scene) => {
    const baseGeometry = new THREE.BoxGeometry(1, 0.1, 1);
    baseGeometry.translate(0, 0.05, 0);
    const baseMaterial = new THREE.MeshPhongMaterial({
      // color: this.contributionData.color,
      color: "#808080",
    });
    const towerBase = new THREE.Mesh(baseGeometry, baseMaterial);

    return towerBase;
  };

  buildTower = (scene, xFactor, zFactor) => {
    // console.log(this.contributionData);
    if (this.contributionData.contributionCount === 0) {
      const mesh = this.createBase(scene);
      mesh.position.x = (this.xSpace + this.offset) * xFactor;
      mesh.position.z = (this.zSpace + this.offset) * zFactor;
      return scene.add(mesh);
    }
    const tower = this.createTower(scene);
    tower.position.x = (this.xSpace + this.offset) * xFactor;
    tower.position.z = (this.zSpace + this.offset) * zFactor;
    return scene.add(tower);
  };
}

export { Tower };
