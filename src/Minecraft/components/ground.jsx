import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }));

    groundTexture.repeat.set(100, 100);

    return (
        <mesh ref={ref}>
            {/*  BufferplaneGeometry was deprectaded https://stackoverflow.com/a/76792805 */}
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial map={groundTexture} />
        </mesh>
    )

};
export default Ground;