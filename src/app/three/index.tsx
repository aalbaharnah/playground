import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated";
import Constants from "expo-constants";
import Touchable from "../../components/touchable";
import { useRouter } from "expo-router";
import products from "../../../assets/models/products";

export default function Three() {
    const rounter = useRouter();

    const onPress = (name: string) => {
        rounter.push(`/three/products/${name}`)
    }

    return (
        <View style={styles.root}>
            <View className="mx-6 items-end py-4 border-b border-[#cccccc]">
                <Text className="text-3xl font-bold">المنتجات</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16 }}>
                {products.map((item, index) => (
                    <Touchable
                        key={item.name + index}
                        className="mb-4 flex-row "
                        onPress={() => onPress(item.name)}
                    >
                        <View className=" flex-1 items-end p-4">
                            <Text className="text-right text-xl font-bold">{item.name}</Text>
                            <Text className="text-right" numberOfLines={2}>{item.description}</Text>
                            <View className="text-right flex-row items-center space-x-1">
                                <Animated.Text className="text-right">ريال</Animated.Text>
                                <Animated.Text className="text-right font-bold text-lg">{item.price}</Animated.Text>
                            </View>
                        </View>
                        <AnimatedImage image={item.image} index={index} />
                    </Touchable>
                ))}
            </ScrollView>
        </View>
    )
}


const AnimatedImage = ({ image, index }: { image: any, index: number }) => {
    const y = useSharedValue(50);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(y.value, [0, 50], [1, 0]),
            transform: [{ translateY: y.value }]
        }
    });

    return (
        <View className="h-28 w-28 rounded-3xl bg-white overflow-hidden">
            <Animated.Image
                className=" h-28 w-28 rounded-3xl"
                source={image}
                style={animatedStyle}
                onLoad={() => {
                    y.value = withDelay(index * 0.3, withSpring(0, {
                        mass: 1,
                        damping: 17,
                        stiffness: 125,
                        overshootClamping: false,
                        restDisplacementThreshold: 0.01,
                        restSpeedThreshold: 2,
                    }));
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})