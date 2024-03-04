import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import useDimensions from "../../hooks/useDimensions";
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { ReText } from "react-native-redash";
import { Suspense } from "react";

export default function DragEmoji() {
    const { width, height } = useDimensions('screen')
    const pressed = useSharedValue(0);
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);
    const val = useSharedValue("😀")

    const pan = Gesture.Pan()
        .onBegin(() => {
            pressed.value = 0;
        })
        .onChange((event) => {
            offsetX.value = event.translationX;
            offsetY.value = event.translationY;
        })
        .onFinalize(() => {
            offsetX.value = withSpring(0);
            offsetY.value = withSpring(0);
            pressed.value = 0;
        });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: offsetX.value },
            { translateY: offsetY.value },
        ],
    }));

    const animatedContainer = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(pressed.value, [-2, -1, 0, 1, 2], ["#C68484", "#A3C9AA", "#EEEEEE", "#FFE4C9", "#9B4444"]),
    }));

    const animatedText = useAnimatedStyle(() => ({
        fontSize: interpolate(offsetX.value + offsetY.value, [100, 50, 0], [140, 120, 96]),
        opacity: interpolate(offsetX.value + offsetY.value, [100, 50], [1, 0]),
        color: interpolateColor(pressed.value, [-2, -1, 0, 1, 2], ["#C68484", "#000", "#000", "#000", "#fff"]),
    }));


    const animatedText2 = useAnimatedStyle(() => ({
        fontSize: interpolate(offsetX.value + offsetY.value, [-100, -50, 0], [140, 120, 96]),
        opacity: interpolate(offsetX.value + offsetY.value, [-100, -50], [1, 0]),
        color: interpolateColor(pressed.value, [-2, -1, 0, 1, 2], ["#fff", "#000", "#000", "#000", "#fff"]),
    }));

    useDerivedValue(() => {
        if (offsetX.value + offsetY.value < -100) {
            val.value = "😆"
            pressed.value = -2;
        } else if (offsetX.value + offsetY.value < -50) {
            val.value = "😄"
            pressed.value = -1;
        } else if (offsetX.value + offsetY.value > 100) {
            val.value = "😟"
            pressed.value = 2;
        } else if (offsetX.value + offsetY.value > 50) {
            val.value = "🙂"
            pressed.value = 1;
        } else {
            val.value = "😀"
            pressed.value = 0;
        }
    });



    return (
        <Animated.View style={animatedContainer} className="flex-1">

            <View className="flex-1 items-center justify-center" style={{ paddingTop: Constants.statusBarHeight }}>
                <GestureDetector gesture={pan}>
                    <Animated.View style={[styles.circle, animatedStyles]}>
                        <ReText style={{ fontSize: 96, }} text={val} />
                    </Animated.View>
                </GestureDetector>
                <Animated.Text style={animatedText2} className={'absolute font-Rakkas -z-10'}>{"يااااه"}</Animated.Text>
                <Animated.Text style={animatedText} className={'absolute font-Rakkas -z-10'}>{"لالالا"}</Animated.Text>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    circle: {
        height: 140,
        width: 140,
        borderRadius: 70,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        overflow: 'hidden',
    },
    txt: {
        // position: 'absolute',
        // zIndex: -10
    }
});