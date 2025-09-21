import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Earth: React.FC = () => {
  const earth = useGLTF("/planet/scene.gltf");

  useEffect(() => {
    // Scale and position
    earth.scene.scale.set(0.25, 0.25, 0.25);
    earth.scene.position.set(0, 0, 0);

    // Traverse meshes to adjust material properties
    earth.scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.Material & {
          precision?: string;
          dithering?: boolean;
        };
        material.precision = "highp";
        material.dithering = true;
        mesh.renderOrder = 1;
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
