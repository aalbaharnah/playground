import { Suspense, useLayoutEffect, useRef } from "react";
import { View } from "react-native";
import { THREE } from "expo-three";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { ContactShadows, useGLTF } from "@react-three/drei/native";
import { SensorType, useAnimatedSensor } from "react-native-reanimated";

export default function CubeScreen() {
    return (
        <View className="flex-1 bg-[#FFFFFF]">
            <Canvas>
                <ambientLight intensity={2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Suspense fallback={null}>
                    <TheModel />
                </Suspense>
                <ContactShadows position={[0, -0.3, -0.16]} opacity={0.3} />
            </Canvas>
        </View>
    )
}

function TheModel() {
    const ref = useRef<THREE.Mesh>(null);
    const { scene } = useGLTF(require('../../../assets/models/dog.gltf')) as any

    useLayoutEffect(() => scene.traverse((o: any) => o.isMesh && (o.castShadow = o.receiveShadow = true)), [])
    const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
        interval: 100
    })

    useFrame((state, delta) => {
        let { x, y, z } = animatedSensor.sensor.value;
        y = ~~(y * 100) / 8000;
        x = ~~(x * 100) / 8000;
        // z = ~~(z * 100) / 8000;
        ref.current?.rotateY(y)
        ref.current?.rotateX(x)
    })

    return (
        <mesh ref={ref} position={[0, 0, 0]}>
            <primitive object={scene} scale={1.25} />
        </mesh>
    )
}