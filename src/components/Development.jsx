import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Design/Mac";

const Development = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      {/* <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} /> */}
      <Stage environment="city" intensity="0.6">
        <Mac />
      </Stage>
    </Canvas>
  );
};

export default Development;
