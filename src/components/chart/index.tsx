import { Canvas, Path, vec, Group, LinearGradient } from "@shopify/react-native-skia";
import Animated, { interpolate, interpolateColor, SharedValue, useAnimatedStyle, useDerivedValue, useSharedValue, withDecay, withSpring, withTiming } from "react-native-reanimated";
import { useMemo } from "react";
import { useWindowDimensions, View, StyleSheet } from "react-native";
import { Gesture, GestureDetector, ScrollView } from "react-native-gesture-handler";
import { getYForX } from "./Math";
import { COLORS, getGraph, PADDING } from "./Model";
import { ReText } from "react-native-redash";

const touchableCursorSize = 20;


export default function LineChart() {

    const window = useWindowDimensions();
    // const { width } = window;
    const width = window.width - PADDING;
    const height = Math.min(window.width, window.height) / 2;
    const translateY = height + PADDING;
    const graphs = useMemo(() => getGraph(width, height), [width, height]);
    // animation value to transition from one graph to the next
    const transition = useSharedValue(0);
    const active = useSharedValue(0);
    const velocity = useSharedValue(0);
    // indicices of the current and next graphs
    const state = useSharedValue({
        next: 0,
        current: 0,
    });
    // path to display
    const path = useDerivedValue(() => {
        const { current, next } = state.value;
        const start = graphs[current].data.path;
        const end = graphs[next].data.path;
        return end.interpolate(start, transition.value)!;
    });
    // x and y values of the cursor
    const x = useSharedValue(0);
    const y = useDerivedValue(() => getYForX(path.value.toCmds(), x.value));

    const currentValue = useDerivedValue(() => {
        const { current } = state.value;
        const index = Math.floor((x.value / width) * graphs[current].data.prices.length);

        if (index < 0 || index >= graphs[current].data.prices.length) {
            return "0";
        }
        return graphs[current].data.prices[index].toLocaleString('de-DE', { style: "currency", currency: "USD" });
    })


    return (
        <ScrollView style={styles.container}>
            <View>
                <Canvas style={{ width, height: 2 * height + 30, left: PADDING / 2 }}>
                    <Group transform={[{ translateY }]}>
                        <Path
                            style="stroke"
                            path={path}
                            strokeWidth={4}
                            strokeJoin="round"
                            strokeCap="round"

                        />
                    </Group>
                </Canvas>

                <Cursor x={x} y={y} width={width} active={active} velocity={velocity} translateY={translateY} />
                <Tooltip x={x} y={y} active={active} currentValue={currentValue} velocity={velocity} translateY={translateY} />
            </View>

        </ScrollView>
    );
}

interface CursorProps {
    x: SharedValue<number>;
    y: SharedValue<number>;
    width: number;
    translateY: number;
    active: SharedValue<number>;
    velocity: SharedValue<number>;
}

export const Cursor = ({ x, y, active, width, velocity, translateY }: CursorProps) => {
    const gesture = useGraphTouchHandler(x, active, velocity, width);

    const style = useAnimatedStyle(() => {
        return {
            position: "absolute",
            width: interpolate(active.value, [0, 1], [touchableCursorSize, touchableCursorSize * 2]),
            height: interpolate(active.value, [0, 1], [touchableCursorSize, touchableCursorSize * 2]),
            left: x.value + (PADDING / 2) - interpolate(active.value, [0, 1], [touchableCursorSize / 2, touchableCursorSize]),
            top: translateY + y.value - interpolate(active.value, [0, 1], [touchableCursorSize / 2, touchableCursorSize]),
            backgroundColor: interpolateColor(active.value, [0, 0.4], ['rgba(0,0,0,1)', 'rgba(255,255,255,1)']),
            borderRadius: interpolate(active.value, [0, 1], [touchableCursorSize / 2, touchableCursorSize]),
            borderWidth: interpolate(active.value, [0, 1], [touchableCursorSize / 2, 4]),
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={style} />
        </GestureDetector>
    );
};

interface TooltipProps {
    x: SharedValue<number>;
    y: SharedValue<number>;
    active: SharedValue<number>;
    translateY: number
    currentValue: SharedValue<string>;
    velocity: SharedValue<number>;
}

export const Tooltip = ({ x, y, active, translateY, velocity, currentValue }: TooltipProps) => {


    const rotate = useDerivedValue(() => {
        return withSpring(velocity.value / 20, config);
    });

    const style = useAnimatedStyle(() => {
        return {
            position: "absolute",
            left: x.value - interpolate(active.value, [0, 1], [touchableCursorSize / 2, touchableCursorSize]),
            top: (translateY / 1.1) + y.value - (touchableCursorSize * 4),
            opacity: active.value,
            transform: [{
                rotate: `${(rotate.value)}deg`,
            }, {
                scale: interpolate(active.value, [0, 1], [0.3, 1])
            }]

        };
    });

    return (
        <Animated.View style={[style, styles.tooltip]}>
            <ReText text={currentValue} style={{ fontWeight: 'bold', fontSize: 18 }} />
        </Animated.View>
    );
};

const config = {
    damping: 25,
    stiffness: 277,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
}

const useGraphTouchHandler = (x: SharedValue<number>, active: SharedValue<number>, velocity: SharedValue<number>, width: number) => {
    const gesture = useMemo(() => {
        return Gesture.Pan().onTouchesDown(() => {
            active.value = withSpring(1, config);
        }).onChange((pos) => {
            x.value += pos.x;
            velocity.value = pos.velocityX;
            console.log(pos.velocityX)
        }).onEnd(({ velocityX }) => {
            x.value = withDecay({ velocity: velocityX, clamp: [0, width] });
            active.value = withTiming(0);
            velocity.value = withDecay({ velocity: velocityX, clamp: [0, width] });
        }).onTouchesUp(({ }) => {
            active.value = withTiming(0);
        });
    }, [width, x]);
    return gesture;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    tooltip: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: 'white',
        borderWidth: 3,
        zIndex: 100,
        // iOS:
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        // Android:
        elevation: 4,
    }
});
