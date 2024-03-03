import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Canvas } from '@react-three/fiber';
import Cube from "../../components/three/cube";
import { Suspense } from "react";
import Shoe from "../../components/three/Shoe";
import { SensorType, useAnimatedSensor } from "react-native-reanimated";

export default function Three() {
    const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
        interval: 100,
    })


    return (
        <View style={styles.root}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Shoe animatedSensor={animatedSensor} />
                </Suspense>
            </Canvas>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
})