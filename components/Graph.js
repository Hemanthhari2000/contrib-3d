import { button, useControls } from "leva";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { saveAs } from "file-saver";

import { Tower } from "../lib/tower";

const Graph = ({ data, handle }) => {
  let [scene] = useState(() => new THREE.Scene());
  let [group] = useState(() => new THREE.Group());

  function onLevaButtonClick() {
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      function (gltfJson) {
        const jsonString = JSON.stringify(gltfJson);
        const blob = new Blob([jsonString], { type: "application/json" });
        saveAs(blob, `${handle}'s_graph.glb`);
      },
      { binary: true }
    );
  }

  useControls({
    "Download Graph": button((get) => onLevaButtonClick()),
  });

  useEffect(() => {
    for (let j = 0; j < data.length; j++) {
      for (let i = 0; i < data[j].length; i++) {
        let tower = new Tower(data[j][i]);
        tower.buildTower(group, j, i);
      }
    }
  }, [data, group]);

  scene.add(group);
  return <primitive object={scene} position={[-20, 0, 0]} />;
};

export default Graph;
