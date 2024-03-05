"use client";

import { Box } from "@chakra-ui/react";
import { Sky, Stats } from "@react-three/drei";

import BaseScene from "@/components/ImmersiveView/Scene";
import BaseCharacter from "@/components/ImmersiveView/Character";
import GraphBox from "@/components/Graph/GraphBox";

export default function ImmersiveView({ data }) {
  return (
    <>
      <Box
        className="dot"
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        width={"10px"}
        height={"10px"}
        borderRadius={"50%"}
        transform={"translate3d(-50%, -50%, 0)"}
        border={"2px solid white"}
        zIndex={2}
      ></Box>
      <BaseScene>
        <BaseCharacter
          controls
          position={[-29, 15, -3]}
          args={[0.5]}
          color="yellow"
        />

        <GraphBox data={data} />

        <Sky />
        {/* <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        /> */}
        <Stats />
      </BaseScene>
    </>
  );
}