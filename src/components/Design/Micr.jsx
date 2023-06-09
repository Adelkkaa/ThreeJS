/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 micr.gltf --transform
Author: Sir Erdees (https://sketchfab.com/sirerdees)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/microphone-maono-47a5fd6af31a4d5ab34b60515c7057a9
Title: Microphone Maono
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Micr(props) {
  const { nodes, materials } = useGLTF("/micr-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.mic_base_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 307.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.mic_head_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 307.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.leg_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 307.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.con_2_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 307.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.mic_ring_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 307.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.con_1_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 307.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.leg_ring_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 307.3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.tail_1_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 306.53, 2.23]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.tail_2_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 306.53, 2.23]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.tail_3_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 306.53, 2.23]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.button_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 306.53, 2.23]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.leg_bott_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 70.27, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.wire_low_mic_txtr_0.geometry}
          material={materials.mic_txtr}
          position={[0, 306.53, 2.23]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/micr-transformed.glb");
