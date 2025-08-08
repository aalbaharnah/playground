import { useFrame, useLoader } from "@react-three/fiber";
import { THREE } from "expo-three";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from "expo-three";
import { MaterialLoader, ObjectLoader } from "three";
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';

interface ShoeProps extends React.ComponentProps<'mesh'> {
    animatedSensor: ReturnType<typeof useAnimatedSensor>
}

export default function Shoe(props: ShoeProps) {
    const ref = useRef<THREE.Mesh>(null);

    const [base, normal, roughness] = useLoader(TextureLoader, [
        require('../../../assets/models/textures/BaseColor.jpg'),
        require('../../../assets/models/textures/Normal.jpg'),
        require('../../../assets/models/textures/Roughness.png'),
    ])

    // const obj2Buffer = useLoader(THREE.FileLoader, require('../../../assets/models/model.gltf'));
    // //@ts-ignore
    // const obj2 = useMemo(() => new GLTFLoader().parse(THREE.LoaderUtils.decodeText(obj2Buffer)), [obj2Buffer])

    const objBuffer = useLoader(THREE.FileLoader, require('../../../assets/models/shoe.obj'));
    //@ts-ignore
    const obj = useMemo(() => new OBJLoader().parse(THREE.LoaderUtils.decodeText(objBuffer)), [objBuffer])


    useLayoutEffect(() => {
        obj.traverse((child) => {
            if ((child as any).isMesh) {
                (child as any).material.map = base;
                (child as any).material.normalMap = normal;
                (child as any).material.roughnessMap = roughness;
            }
        })
    }, [obj])


    useFrame((state, delta) => {
        // ref.current?.rotateY(delta * 0.5)
        let { x, y, z } = props.animatedSensor.sensor.value;

        x = ~~(x * 100) / 8000;
        y = ~~(y * 100) / 8000;
        ref.current?.rotateY(y)
        ref.current?.rotateX(x)
    })


    return (
        <mesh ref={ref} position={[0, 0, 0]}>
            <primitive object={obj} scale={10} />
        </mesh>
    )
}