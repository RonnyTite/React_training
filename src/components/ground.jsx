import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { NearestFilter, RepeatWrapping } from "three";
const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }));

    groundTexture.magFilter = NearestFilter;
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    return (
        <mesh ref={ref}>
            <planeGeometry args={[100, 100]} /> // BufferplaneGeometry was deprectaded https://stackoverflow.com/a/76792805
            <meshStandardMaterial map={groundTexture} />
        </mesh>
    )

};
export default Ground;