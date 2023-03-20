import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { VkLogo } from "./Design/VkLogo";

const SocialMedia = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      {/* <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} /> */}
      <Stage environment="city" intensity="0.6">
        <VkLogo />
      </Stage>
    </Canvas>
  );
};

export default SocialMedia;
