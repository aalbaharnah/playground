import { View } from "react-native";
import Shoe from "../../components/three/Shoe";
import { SensorType, useAnimatedSensor } from "react-native-reanimated";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import { THREE } from "expo-three";
import { ContactShadows, OrbitControls, useGLTF } from "@react-three/drei/native";

export default function CubeScreen() {
    return (
        <View className="flex-1 bg-[#FFFFFF]">
            <Suspense fallback={null}>
                <Canvas camera={{ position: [-5, 1, 10], fov: 60 }}>
                    <ambientLight intensity={5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <ContactShadows position={[0, -2.3, -0.16]} opacity={0.6} />
                    <BicycleModel />
                </Canvas>
            </Suspense>
        </View>
    )
}

function BicycleModel() {
    const { scene } = useGLTF(require("../../../assets/models/chair.gltf")) as any;

    useLayoutEffect(() => scene.traverse((o: any) => o.isMesh && (o.castShadow = o.receiveShadow = true)), [])
    const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
        interval: 100
    })
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {

        let { x, y, z } = animatedSensor.sensor.value;
        y = ~~(y * 100) / 8000;
        x = ~~(x * 100) / 8000;
        // z = ~~(z * 100) / 8000;
        ref.current?.rotateY(y)
        ref.current?.rotateX(x)
        // ref.current?.rotateZ(z)
    })
    return (
        <mesh ref={ref} scale={1} position={[0, 0, 0]}>
            <primitive object={scene} scale={1} />
        </mesh>
    )
}
