import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lighting = () => {
  const directionalLightHelper1 = useRef();
  useHelper(directionalLightHelper1, DirectionalLightHelper, "red");

  const DirectionalLightHelper2 = useRef();
  useHelper(DirectionalLightHelper2, DirectionalLightHelper, "cyan");

  const DirectionalLightHelper3 = useRef();
  useHelper(DirectionalLightHelper3, DirectionalLightHelper, "green");
  return (
    <>
      <directionalLight
        // ref={directionalLightHelper1}
        position={[50, 40, 40]}
        scale={1}
        intensity={1.2}
      />
      <directionalLight
        // ref={DirectionalLightHelper2}
        position={[-50, 40, 40]}
        intensity={0.6}
      />
      <directionalLight
        // ref={DirectionalLightHelper3}
        position={[0, 40, -40]}
        intensity={0.4}
      />
    </>
  );
};

export default Lighting;
