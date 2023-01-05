import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Tower } from "./tower/tower";
// import { createTower, createBase } from "./tower/tower";
import getContributions from "./utils/getContribData";
import downloadModel from "./utils/exportModel";

const contributionsData = [
  {
    color: "#ebedf0",
    count: 0,
  },
  {
    color: "#30a14e",
    count: 5,
  },
  {
    color: "#9be9a8",
    count: 1,
  },
  {
    color: "#ebedf0",
    count: 0,
  },
  {
    color: "#40c463",
    count: 4,
  },
  {
    color: "#40c463",
    count: 3,
  },
  {
    color: "#ebedf0",
    count: 0,
  },
];
let contribDaita = await getContributions(
  "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",
  "fabchris01"
);


// THREE JS INIT
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// createTower(scene);
// createBase(scene);

// for (let i = 0; i < 1; i++) {
//   for (let j = 0; j < contributionsData.length; j++) {
//     const tower = new Tower(contributionsData[j]);
//     tower.buildTower(scene, i, j);
//   }
// }

for (let j = 0; j < contribDaita.length; j++) {
  for (let i = 0; i < contribDaita[j].length; i++) {
    let tower = new Tower(contribDaita[j][i]);
    tower.buildTower(scene, j, i);
  }
}

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

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  downloadModel(scene);
});

camera.position.z = 8;
camera.position.y = 10;
camera.position.x = -8;
controls.update();

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  controls.update();

  renderer.render(scene, camera);
}
animate();
