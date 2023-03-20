import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "./Design/Atom";

const WebDesign = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment="city" intensity="0.6">
        <Atom />
      </Stage>
    </Canvas>
  );
};

export default WebDesign;
