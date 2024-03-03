import { useFrame, useLoader } from "@react-three/fiber/native";
import { THREE } from "expo-three";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TextureLoader } from "expo-three";
import { MaterialLoader, ObjectLoader } from "three";
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';

interface ShoeProps extends React.ComponentProps<'mesh'> {
    animatedSensor: ReturnType<typeof useAnimatedSensor>
}

export default function Shoe(props: ShoeProps) {
    const ref = useRef<any>();

    const [base, normal, roughness] = useLoader(TextureLoader, [
        require('../../../assets/Airmax/textures/BaseColor.jpg'),
        require('../../../assets/Airmax/textures/Normal.jpg'),
        require('../../../assets/Airmax/textures/Roughness.png'),
    ])

    const objBuffer = useLoader(THREE.FileLoader, require('../../../assets/Airmax/shoe.obj'));
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

        x = ~~(x * 100) / 5000;
        y = ~~(y * 100) / 5000;
        ref.current?.rotateY(y)
        ref.current?.rotateX(x)
    })


    return (
        <mesh ref={ref} position={[0,0,0]}>
            <primitive object={obj} scale={10} />
        </mesh>
    )
}