import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Ground from './components/Ground.jsx';
import Player from './components/Player.jsx';
import FPV from './components/FirstPersonView.jsx';
import Cubes from './components/Cubes.jsx';
import './index.css';

function App() {

  return (
    <>
      <div id="minecraft-container">
        <Canvas>
          <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={0.5} />
          <FPV />
          <Physics>
            <Player />
            <Cubes />
            <Ground />
          </Physics>
        </Canvas>
        <div className='absolute centered cursor'>+</div>
      </div>
    </>
  )
}

export default App
