import useStore from "../hooks/useStore.js";
import Cube from "./Cube.jsx";

const Cubes = () => {
    const [cubes] = useStore((state) =>
        [state.cubes]
    )
    console.log(cubes);
    return cubes.map(({ pos, texture, key }) => {
        return (<Cube key={key} position={pos} texture={texture} />)
    })
}

export default Cubes