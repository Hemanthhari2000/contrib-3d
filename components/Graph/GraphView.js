"use client";

import { useBreakpointValue } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Lighting from "../../components/Lighting";

import Navbar from "../Navbar";
import PageTransition from "../Animations/Transition/PageTransition";
import { UserCannotBeFound } from "../Error";
import Graph from ".";

export default function GraphView({ data }) {
  let zoomValue = useBreakpointValue({ base: 10, md: 25 });
  let user = data
    ? {
        username: data.username,
        year: data.year,
      }
    : null;
  return (
    <>
      <Navbar data={user} />
      <PageTransition>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          {!data ? (
            <UserCannotBeFound
              title={"Cannot find the user, Please check your github handle."}
            />
          ) : (
            <Canvas>
              <OrthographicCamera
                makeDefault
                zoom={zoomValue}
                position={[90, 50, 70]}
              />
              <OrbitControls />
              <Lighting />
              <Graph data={data} />
            </Canvas>
          )}
        </div>
      </PageTransition>
    </>
  );
}
