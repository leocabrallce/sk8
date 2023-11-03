import { useLayoutEffect, useRef, useState } from 'react';
import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import Skate from './Skate';
import Sk8 from './Sk8';
import { Sparkles } from "@react-three/drei";
import gsap from 'gsap';


export default function Scene() {
  const tl = gsap.timeline();
  const sparkles = useRef();
  const { perf } = useControls('Debug', {
    perf: false,
  });
  const [sk8, setSk8] = useState(false);

  useLayoutEffect(() => {
    tl.to(sparkles.current, {
      color: 'white',
      scrollTrigger: {
        trigger: '.sixth-section',
        markers: false,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        immediateRender: false,
      },
      onStart: (el) => {
        setSk8(true);
      },
      onReverseComplete: (el) => {
        setSk8(false);
      }
    });
  }, []);

  const { position, rotation } = useControls('Scene', {
    position: {
      value: { x: 0, y: 0, z: 0 },
      step: 1
    },
    rotation: {
      value: { x: 0, y: 0, z: 0 },
      step: .2
    }
  });
  const ref = React.useRef();

  useFrame((state, delta) => {
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {perf ? <Perf position="bottom-right" /> : null}

      <Sparkles
        ref={sparkles}
        color="black"
        scale={[10, 10, 10]}
        speed={.5}
        count={200}
      />

      <mesh
        scale={.2}
        ref={ref}
        position={[position.x, position.y, position.z]}
        rotation={[rotation.x, rotation.y, rotation.z]}
      >
        {/* {sk8 ? <Sk8 /> : <Skate />} */}
        {sk8 ? <Sk8 /> : <Skate />}
      </mesh>
    </>
  );
}
