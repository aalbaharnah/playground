import { useFrame } from "@react-three/fiber";
import { THREE } from "expo-three";
import { useRef, useState } from "react";


interface CubeProps extends React.ComponentProps<'mesh'> {

}

export default function Cube(props: CubeProps) {
    const [active, setActive] = useState(false);

    const ref = useRef<THREE.Mesh>();

    useFrame((state, delta) => {
        if (active) {
            state.camera.position.x += (0 - state.camera.position.x) * 0.05;
            state.camera.position.y += (1 - state.camera.position.y) * 0.05;
            state.camera.lookAt(0, 0, 0);
            ref.current?.rotateY(delta * 0.5)
            
        } else {
            state.camera.position.x += (0 - state.camera.position.x) * 0.05;
            state.camera.position.y += (0 - state.camera.position.y) * 0.05;
            state.camera.lookAt(0, 0, 0);
            ref.current?.rotateY(0)
        }

    })


    return (
        <mesh
            {...props}
            ref={ref}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={active ? 'hotpink' : 'gray'} />
        </ mesh>
    )
}