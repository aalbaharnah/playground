import { View, StyleSheet } from "react-native";
import { Canvas } from '@react-three/fiber';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect, useState } from "react";
import Bear from "../../../components/three/bear";
import Constants from "expo-constants";
import useDimensions from "../../../hooks/useDimensions";
import products, { Product } from "../../../../assets/models/products";
import { useLocalSearchParams } from "expo-router";
import Model from "../../../components/three/model";

export default function Three() {
    const dim = useDimensions('screen');
    const params = useLocalSearchParams();
    const { id } = params;



    const [item, setItem] = useState<Product | null>(null);

    useEffect(() => {
        const product = products.find(item => item.name === id);
        if (product) setItem(product);
    }, [id])


    const y = useSharedValue(0);
    const scale = useSharedValue(2);
    const position = useSharedValue(-2);
    const height = useSharedValue((dim.height - Constants.statusBarHeight) / 2);

    const onScoll = useAnimatedScrollHandler((event) => {
        y.value = event.contentOffset.y;
    })

    const animatedStyle = useAnimatedStyle(() => ({
        height: height.value,
    }))

    useDerivedValue(() => {
        if (y.value > 5) {
            height.value = withSpring((dim.height - Constants.statusBarHeight) / 3);
            scale.value = withSpring(1.5);
            position.value = withSpring(0);
        } else {
            height.value = withSpring((dim.height - Constants.statusBarHeight) / 2);
            scale.value = withSpring(2);
            position.value = withSpring(-2);
        }
    }, [])

    return (
        <View style={styles.root}>
            <Animated.View style={animatedStyle} className="bg-white rounded-3xl mx-4">
            </Animated.View>
            <View style={{ paddingTop: Constants.statusBarHeight }} className=" absolute h-1/2 w-full  ">
                <Canvas shadows='soft' >
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[0, 10, 0]} angle={0.15} penumbra={2} decay={0} intensity={Math.PI} />
                    <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                    </directionalLight>
                    <Model scale={scale} position={position} model={item?.model} />
                </Canvas>
            </View>

            <View className="px-6 py-4">
                <Animated.Text className=" font-bold text-[#b8b8b8] text-right">فنون</Animated.Text>
                <View className="flex-row items-center justify-between w-full">
                    <View className="flex-row items-baseline space-x-2">
                        <Animated.Text className=" text-xl">ريال</Animated.Text>
                        <Animated.Text className=" font-bold text-3xl">{item?.price}</Animated.Text>
                    </View>
                    <Animated.Text className=" font-bold text-3xl text-right">{item?.name}</Animated.Text>
                </View>
                <View>
                    <Animated.Text className="text-right text-lg py-4">
                        {item?.description}
                    </Animated.Text>
                </View>
            </View>


            <Animated.ScrollView
                onScroll={onScoll}
            // contentContainerStyle={{ paddingHorizontal: 24 }}
            >
                {/* <View style={{ height: 500, backgroundColor: 'red' }} /> */}
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})