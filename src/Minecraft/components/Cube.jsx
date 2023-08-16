import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures.js";

const Cube = ({ position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const activeTexture = textures[texture + 'Texture'];
    console.log('activeTexture', activeTexture)
    return (
        <mesh ref={ref}>
            {/*  args = [widht, height, depth] */}
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={activeTexture} />
        </mesh>
    )
}

export default Cube;