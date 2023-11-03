import React, { useRef, useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

export default function Sk8() {
  const modelPath = '/models/sk8.glb';
  const tl = gsap.timeline();
  const { camera } = useThree();

  const defaultTrigger = {
    markers: true,
    start: 'top bottom',
    end: 'top top',
    scrub: true,
    immediateRender: false,
  };

  useLayoutEffect(() => {
    tl.to(camera.position, {
      x: 0,
      y: 3,
      z: 10,
      scrollTrigger: {
        trigger: '.s-first-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 1');
      },
      onReverseComplete: (el) => {
        console.log('end 1');
      }
    });
    tl.to(camera.position, {
      x: -0.383666,
      y: -0.76,
      z: 3.50,
      scrollTrigger: {
        trigger: '.s-second-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 2');
      },
      onReverseComplete: (el) => {
        console.log('end 2');
      }
    });
    tl.to(camera.rotation, {
      x: 0.823761,
      y: -0.181106,
      z: 0.686662,
      scrollTrigger: {
        trigger: '.s-second-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 3');
      },
      onReverseComplete: (el) => {
        console.log('end 3');
      }
    });
    tl.to(camera.position, {
      x: 1.09,
      y: -0.6,
      z: 0.77,
      scrollTrigger: {
        trigger: '.s-third-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 3');
      },
      onReverseComplete: (el) => {
        console.log('end 3');
      }
    });
    tl.to(camera.rotation, {
      x: 0.78,
      y: 0.45,
      z: -0.41,
      scrollTrigger: {
        trigger: '.s-third-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 4');
      },
      onReverseComplete: (el) => {
        console.log('end 4');
      }
    });
    tl.to(camera.rotation, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: '.s-fourth-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 5');
      },
      onReverseComplete: (el) => {
        console.log('end 5');
      }
    });
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 2,
      scrollTrigger: {
        trigger: '.s-fourth-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 6');
      },
      onReverseComplete: (el) => {
        console.log('end 6');
      }
    });
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 25,
      scrollTrigger: {
        trigger: '.s-fifth-section',
        ...defaultTrigger
      },
      onStart: (el) => {
        console.log('start 7');
      },
      onReverseComplete: (el) => {
        console.log('end 7');
      }
    });
  }, []);


  useFrame((state, delta) => {
    state.camera.lookAt(0, 0, 0);
    ref.current.rotation.y += delta;
  });

  const model = useGLTF(modelPath);
  const { nodes, materials } = model;
  console.log(nodes, materials);
  const { geometry: fireGeometry } = nodes.Board_EngineFire_0;
  const fireMaterial = materials.EngineFire;
  const { geometry: boardGeometry } = nodes.Board_Hoverboard_0;
  const boardMaterial = materials.Hoverboard;
  const ref = useRef();

  return (
    <group ref={ref} scale={5}  >
      <directionalLight intensity={.5} position={[0, 0, 0]} />
      <mesh geometry={fireGeometry} material={fireMaterial} />
      <mesh geometry={boardGeometry} material={boardMaterial} />
    </group>
  );
}
