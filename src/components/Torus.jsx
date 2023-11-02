import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';

export default function Torus() {
  const { perf } = useControls('Debug', {
    perf: true,
  });

  const { position } = useControls('Torus', {
    position: {
      value: { x: 0, y: 0, z: 0 },
      min: -2,
      max: 2,
      step: .01
    },
  });
  const ref = React.useRef();

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime;

    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>

      {perf ? <Perf position="bottom-right" /> : null}

      <mesh ref={ref} position={[position.x, position.y, position.z]}>
        <meshStandardMaterial color="orange" />
        <torusKnotGeometry />
      </mesh>
    </>
  );
}
