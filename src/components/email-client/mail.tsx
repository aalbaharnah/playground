import { useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import Animated, { Easing, WithTimingConfig, interpolate, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface MailProps {
    name: string;
    subject: string;
    message: string;
    onPress: () => void;
}

export default function Mail(props: MailProps) {
    const height = useSharedValue(0)

    useEffect(() => {
        height.value = withSpring(134, {
            mass: 1,
            damping: 15,
            stiffness: 100,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
        });
    }, [])

    const animatedStyle = useAnimatedStyle(() => ({
        height: height.value,
        paddingVertical: interpolate(height.value, [100, 50], [16, 0]),
        opacity: interpolate(height.value, [100, 50], [1, 0]),
    }), [])

    const onPress = () => {
        height.value = withTiming(0, {
            duration: 400,
            easing: Easing.inOut(Easing.ease),
        }, () => {
            runOnJS(props.onPress)();
        })
    }


    return (
        <AnimatedPressable style={animatedStyle} onPress={onPress} className="mx-4 justify-center border-b border-[#F4DFC8] overflow-hidden">
            <Animated.Text className=" font-bold text-lg text-right">{props.name}</Animated.Text>
            <Animated.Text className=" my-2 font-semibold text-base text-right">{props.subject}</Animated.Text>
            <Animated.Text className=" text-right text-base">{props.message}</Animated.Text>
        </AnimatedPressable>
    )
}