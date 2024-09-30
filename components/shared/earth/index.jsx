"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";

function EarthMesh() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/earth/color.jpg",
    "/assets/earth/normal.png",
    "/assets/earth/occlusion.jpg",
  ]);

  return (
    <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </motion.mesh>
  );
}

export default function Earth() {
  const scene = useRef(null);

  return (
    <div ref={scene} className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <EarthMesh />
      </Canvas>
    </div>
  );
}
