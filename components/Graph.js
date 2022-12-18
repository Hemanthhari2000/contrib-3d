import { useEffect, useState } from "react";
import * as THREE from "three";
import { Tower } from "../lib/tower";

const Graph = ({ data }) => {
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
  return <primitive object={scene} position={[-20, 0, 0]} />;
};

export default Graph;
