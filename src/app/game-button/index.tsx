import { Text, View, StyleSheet, Pressable, PressableProps } from "react-native";
import Animated, {
    Easing,
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function GameButton() {
    const press = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderBottomWidth: interpolate(press.value, [0, 1], [7, 2]),
            // borderColor: interpolateColor(press.value, [0, 1], ['#333', '#FFBB64']),
        };
    });
    return (
        <View className="flex-1 items-center justify-center">
            <AnimatedPressable
                style={[animatedStyle, styles.btn]}
                onPressIn={() => (press.value = withTiming(1, { duration: 200 }))}
                onPressOut={() => (press.value = withTiming(0, { duration: 400 }))}
            >
                <Text className=" text-2xl">Press me</Text>
            </AnimatedPressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 16,
    }
})