import { useFrame } from "@react-three/fiber";
import { THREE } from "expo-three";
import { useRef, useState } from "react";
import { useAnimatedSensor } from "react-native-reanimated";


interface CubeProps extends React.ComponentProps<'mesh'> {
    animatedSensor: ReturnType<typeof useAnimatedSensor>
}

export default function Cube(props: CubeProps) {
    const [active, setActive] = useState(false);

    const ref = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (active) {
            let { x, y, z } = props.animatedSensor.sensor.value;

            x = ~~(x * 100) / 5000;
            y = ~~(y * 100) / 5000;
            ref.current?.rotateY(y)
            ref.current?.rotateX(x)

        } else {
            state.camera.position.x += (0 - state.camera.position.x) * 0.05;
            state.camera.position.y += (1 - state.camera.position.y) * 0.05;
            state.camera.lookAt(0, 0, 0);
            ref.current?.rotateY(delta * 0.5)
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
            <meshStandardMaterial color={active ? 'orange' : 'gray'} />
        </ mesh>
    )
}