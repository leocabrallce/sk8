import React, { useRef, useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

export default function Skate() {
  const modelPath = '/models/skate.glb';
  const tl = gsap.timeline();
  const { camera } = useThree();

  const defaultTrigger = {
    markers: false,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
    immediateRender: false,
  };

  useLayoutEffect(() => {
    tl.to(camera.position, {
      x: -0.383666,
      y: -0.76,
      z: 3.50,
      scrollTrigger: {
        trigger: '.second-section',
        ...defaultTrigger
      },
    });
    tl.to(camera.rotation, {
      x: 0.823761,
      y: -0.181106,
      z: 0.686662,
      scrollTrigger: {
        trigger: '.second-section',
        ...defaultTrigger
      },
    });
    tl.to(camera.position, {
      x: 1.09,
      y: -0.6,
      z: 0.77,
      scrollTrigger: {
        trigger: '.third-section',
        ...defaultTrigger
      },
    });
    tl.to(camera.rotation, {
      x: 0.78,
      y: 0.45,
      z: -0.41,
      scrollTrigger: {
        trigger: '.third-section',
        ...defaultTrigger
      },
    });
    tl.to(camera.rotation, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: '.fourth-section',
        ...defaultTrigger
      },
    });
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 2,
      scrollTrigger: {
        trigger: '.fourth-section',
        ...defaultTrigger
      },
    });
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 25,
      scrollTrigger: {
        trigger: '.fifth-section',
        ...defaultTrigger
      },
    });
  }, []);

  const model = useGLTF(modelPath);
  const { nodes, materials } = model;
  const { geometry } = nodes.Object_3;
  const material = materials.material_0;
  const ref = useRef();

  return (
    <>
      <directionalLight intensity={.5} position={[-2.38, 1.32, 0.75]} />
      <mesh scale={.5} ref={ref} geometry={geometry} material={material} />
    </>
  );
}
