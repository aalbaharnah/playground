import { memo, useEffect } from "react";
import { Pressable, DeviceEventEmitter } from "react-native";
import Animated, { ReduceMotion, LinearTransition, interpolate, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming, runOnJS, LayoutAnimationConfig, interpolateColor, Easing } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface MailProps {
    name: string;
    id: string;
    subject: string;
    message: string;
    onPress: () => void;
    onDelete: () => void;
    selected?: boolean;
}

const config = {
    mass: 1,
    damping: 15,
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System,
}

function Mail(props: MailProps) {

    const height = useSharedValue(0);
    const selected = useSharedValue(0);

    selected.value = props.selected ? withTiming(1, { duration: 200 }) : withTiming(0, { duration: 200 });

    useEffect(() => {
        height.value = withSpring(134, config);

        const sub = DeviceEventEmitter.addListener('mail-delete', (selectedMails: string[]) => {
            if (selectedMails.includes(props.id)) {
                height.value = withTiming(0, {
                    duration: 500,
                    easing: Easing.bezier(0.333, 0.01, 0, 1),
                    reduceMotion: ReduceMotion.System
                }, (finished) => {
                    runOnJS(props.onDelete)();
                });
            }
        });
        return () => sub.remove();
    }, [])

    const animatedStyle = useAnimatedStyle(() => {
        return ({
            height: height.value,
            paddingVertical: interpolate(height.value, [100, 0], [16, 0]),
            opacity: interpolate(height.value, [100, 50], [1, 0]),
            backgroundColor: interpolateColor(selected.value, [0, 1], ['white', '#976635']),
        })
    }, [])

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            color: interpolateColor(selected.value, [0, 1], ['black', 'white'])
        }
    }, [])

    return (
        <AnimatedPressable
            style={[animatedStyle, { zIndex: props.selected ? -1 : 1 }]}
            onPress={props.onPress}
            className="mx-2 px-2 justify-center border-b border-[#F4DFC8] overflow-hidden"
        >
            <Animated.Text style={[animatedTextStyle, { lineHeight: 38 }]} className="text-lg font-rawasi-black text-right">{props.name}</Animated.Text>
            <Animated.Text style={[animatedTextStyle, { lineHeight: 30 }]} className="my-2 font-rawasi-bold text-lg text-right">{props.subject}</Animated.Text>
            <Animated.Text style={[animatedTextStyle, { lineHeight: 24 }]} numberOfLines={2} className="text-right font-rawasi-regular text-base">{props.message}</Animated.Text>
        </AnimatedPressable>
    )
}

export default memo(Mail);