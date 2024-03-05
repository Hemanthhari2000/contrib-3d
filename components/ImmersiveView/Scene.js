"use client";
import { Canvas } from "@react-three/fiber";
import { Loader, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { useState, useEffect } from "react";

import Lights from "./Lights";
import Floor from "./Floor";
import Overlay from "./Overlay";

const BaseScene = ({ children }) => {
  const [showInstructions, setShowInstructions] = useState(true);

  function pointerlockchange() {
    setShowInstructions(!showInstructions);
  }

  useEffect(() => {
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerlockchange,
        false
      );
    };
  });
  return (
    <>
      <Canvas shadows camera={{ fov: 75, position: [-50, 0, 5] }}>
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {/* <Debug color="black" scale={1.1}>
          </Debug> */}
          {children}
          <Floor rotation={[Math.PI / -2, 0, 0]} color="#1A202C" />
        </Physics>

        <PointerLockControls selector="#immersive-view-enter-btn" />
      </Canvas>
      <Loader />
      <Overlay showInstructions={showInstructions} />
    </>
  );
};

export default BaseScene;
