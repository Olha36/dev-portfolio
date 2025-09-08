import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");

  useEffect(() => {
    earth.scene.scale.set(0.25, 0.25, 0.25);

    earth.scene.position.set(0, 0, 0);

    earth.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.precision = "highp";
        child.material.dithering = true;
        child.renderOrder = 1;
      }
    });
  }, [earth]);

  return <primitive object={earth.scene} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1.5, 2]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        logarithmicDepthBuffer: true,
      }}
      camera={{
        fov: 35,
        near: 0.01,
        far: 1000,
        position: [0, 17, 8],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          enablePan={false}
          minDistance={6}
          maxDistance={12}
        />

        <ambientLight intensity={0.7} />
        <directionalLight
          position={[15, 15, 15]}
          intensity={1.2}
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
