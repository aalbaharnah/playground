import { View, StyleSheet } from "react-native";
import { Canvas } from '@react-three/fiber';
import Cube from "../../components/three/cube";
import { SensorType, useAnimatedSensor } from "react-native-reanimated";
import { useRef } from "react";
import Shoe from "../../components/three/Shoe";

export default function Three() {
    const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
        interval: 100,
    })


    return (
        <View style={styles.root}>
            <Canvas>

                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

                {/* <Cube animatedSensor={animatedSensor} /> */}
                {/* <mesh>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="orange" />
                </mesh> */}

                <Shoe animatedSensor={animatedSensor} />

            </Canvas>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
})