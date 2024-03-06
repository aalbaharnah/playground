import { View } from "react-native";
import BicycleModel from "../../components/bicycle/bicycle-model";
import { Canvas } from "@react-three/fiber/native";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Touchable from "../../components/touchable";

const config = {
    damping: 25,
    stiffness: 277,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
}

export default function Bicycle() {
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
            offsetX.value = withSpring(0, config);
        });

    return (
        <View className="flex-1">
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
                    <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                </directionalLight>
                <mesh>
                    <BicycleModel
                        x={offsetX}
                        y={offsetY}
                    />
                </mesh>
            </Canvas>
            <GestureDetector gesture={pan}>
                <View className=" absolute h-full w-full" />
            </GestureDetector>
        </View>
    )
}