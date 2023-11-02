import './App.css';
import { Canvas } from '@react-three/fiber';
import Torus from './components/Torus';
import * as THREE from 'three';

function App() {

  return (
    <main className='absolute'>
      <h1 className="text-3xl font-bold underline">
        sk8
      </h1>
      <div className='w-full h-full relative top-0 left-0'>
        <Canvas
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
          }}
          camera={{
            // fov: 45,
            near: 0.1,
            far: 200,
            position: [3, 2, 6],
          }}
        >
          <directionalLight position={[1, 2, 3]} intensity={1.5} />
          <ambientLight intensity={0.5} />

          <Torus />

        </Canvas>
      </div>
    </main>
  );
}

export default App;;
