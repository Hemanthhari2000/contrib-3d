import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const generateContributionGraph = (data) => {
    const canvas = document.querySelector("canvas")

    // THREE JS INIT
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        canvas.innerWidth / canvas.innerHeight,
        0.1,
        1000
        );
        
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(canvas.innerWidth, canvas.innerHeight);
        canvas.appendChild(renderer.domElement);
        
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshPhongMaterial({ color: "red" });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = -10;
        scene.add(cube);
     

        // for (let j = 0; j < data.length; j++) {
        //     for (let i = 0; i < data[j].length; i++) {
        //         let tower = new Tower(data[j][i]);
        //         tower.buildTower(scene, j, i);
        //     }
        // }
        
        const primaryAmbientLight = new THREE.AmbientLight("#F8F8F8"); // soft white light
        scene.add(primaryAmbientLight);
        
        const light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(-3, 5, 0);
        scene.add(light);
        
        const directionLightHelper = new THREE.DirectionalLightHelper(light, 1, "red");
        scene.add(directionLightHelper);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        
        const cameraHelper = new THREE.CameraHelper(camera);
        scene.add(cameraHelper);
        
        const axesHelper = new THREE.AxesHelper(10);
        scene.add(axesHelper);
        
        camera.position.z = 8;
        camera.position.y = 10;
        camera.position.x = -8;
        controls.update();
        
        function animate() {
            requestAnimationFrame(animate);
            
            controls.update();
            
            renderer.render(scene, camera);
        }
        animate();        
}

export {generateContributionGraph};