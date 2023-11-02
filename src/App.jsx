import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Canvas>
        <mesh>
          <meshNormalMaterial />
          <torusKnotGeometry />
        </mesh>
      </Canvas>
    </main>
  );
}

export default App;
