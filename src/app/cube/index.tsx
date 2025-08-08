import { Suspense, useLayoutEffect, useRef } from "react";
import { View } from "react-native";
import { THREE } from "expo-three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { SensorType, SharedValue, useAnimatedSensor, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import useDimensions from "../../hooks/useDimensions";

export default function CubeScreen() {
    const dim = useDimensions('screen');
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);
    const pressed = useSharedValue(0);

    const pan = Gesture.Pan()
        .onBegin(() => {
            pressed.value = 0;
        })
        .onChange((event) => {
            offsetX.value = event.translationX;
        })
        .onFinalize(() => {
            offsetX.value = withSpring(0);
        });


    return (
        <View className="flex-1 bg-[#000]">
            <Canvas>
                <ambientLight intensity={Math.PI} />
                <spotLight position={[0, 100, 10]} penumbra={1} decay={0} intensity={Math.PI} />
                <Suspense fallback={null}>
                    <TheModel x={offsetX} />
                </Suspense>
                <ContactShadows position={[0, -0.3, -0.16]} opacity={0.3} />
            </Canvas>

            <GestureDetector gesture={pan}>
                <View style={{ width: dim.width - 64 }} className=" self-center absolute  h-full w-full" />
            </GestureDetector>
        </View>
    )
}

interface Props {
    x: SharedValue<number>;
    // y: SharedValue<number>;
    // z: SharedValue<number>;
}
function TheModel(props: Props) {
    const ref = useRef<THREE.Mesh>(null);
    const { scene } = useGLTF(require('../../../assets/models/cube.glb')) as any
    useLayoutEffect(() => scene.traverse((o: any) => o.isMesh && (o.castShadow = o.receiveShadow = true)), [])


    const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
        interval: 100
    })

    useFrame((state, delta) => {
        // let { x, y, z } = animatedSensor.sensor.value;
        // y = ~~(y * 100) / 8000;
        // x = ~~(x * 100) / 8000;
        // // z = ~~(z * 100) / 8000;
        // ref.current?.rotateY(y)
        // ref.current?.rotateX(x)
        ref.current?.rotateY(props.x.value / (Math.PI * 300))
    })

    return (
        <>
            <mesh ref={ref} position={[0, 0, 0]}>
                <primitive object={scene} scale={0.5} />
            </mesh>

        </>
    )
}