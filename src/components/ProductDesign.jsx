import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Micr } from "./Design/Micr";

const ProductDesign = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment="city" intensity="0.6">
        <Micr />
      </Stage>
    </Canvas>
  );
};

export default ProductDesign;
