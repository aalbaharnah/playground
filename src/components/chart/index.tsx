import { Canvas, Path, vec, Group, LinearGradient, Circle, Paint } from "@shopify/react-native-skia";
import Animated, { convertToRGBA, interpolate, interpolateColor, SharedValue, useAnimatedStyle, useDerivedValue, useSharedValue, withDecay, withSpring } from "react-native-reanimated";
import { useMemo } from "react";
import { useWindowDimensions, View, StyleSheet } from "react-native";
import { Gesture, GestureDetector, ScrollView } from "react-native-gesture-handler";
import { getYForX } from "./Math";
import { COLORS, getGraph, PADDING } from "./Model";

const touchableCursorSize = 30;


export default function LineChart() {

    const window = useWindowDimensions();
    const { width } = window;
    const height = Math.min(window.width, window.height) / 2;
    const translateY = height + PADDING;
    const graphs = useMemo(() => getGraph(width, height), [width, height]);
    // animation value to transition from one graph to the next
    const transition = useSharedValue(0);
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
    const active = useSharedValue(0);
    const y = useDerivedValue(() => getYForX(path.value.toCmds(), x.value));
    const gesture = useGraphTouchHandler(x, active, width);
    const style = useAnimatedStyle(() => {
        return {
            position: "absolute",
            width: touchableCursorSize,
            height: touchableCursorSize,
            left: x.value - touchableCursorSize / 2,
            top: translateY + y.value - touchableCursorSize / 2,
        };
    });
    return (
        <ScrollView style={styles.container}>
            <View>
                <Canvas style={{ width, height: 2 * height + 30 }}>
                    <Group transform={[{ translateY }]}>
                        <Path
                            style="stroke"
                            path={path}
                            strokeWidth={4}
                            strokeJoin="round"
                            strokeCap="round"
                        >
                            <LinearGradient
                                start={vec(0, 0)}
                                end={vec(width, 0)}
                                colors={COLORS}
                            />
                        </Path>
                        <Cursor x={x} y={y} active={active} width={width} />
                    </Group>
                </Canvas>

                <GestureDetector gesture={gesture}>
                    <Animated.View style={style} />
                </GestureDetector>
            </View>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
});


interface CursorProps {
    x: SharedValue<number>;
    y: SharedValue<number>;
    active: SharedValue<number>;
    width: number;
}

export const Cursor = ({ x, y, active, width }: CursorProps) => {
    const color = useDerivedValue(() =>
        convertToRGBA(
            interpolateColor(
                x.value / width,
                COLORS.map((_, i) => i / COLORS.length),
                COLORS
            )
        )
    );
    const transform = useDerivedValue(() => [
        { translateX: x.value },
        { translateY: y.value },
    ]);

    const size = useDerivedValue(() => {
        return interpolate(active.value, [0, 1], [9, 18])
    }, [])

    return (
        <Group transform={transform}>
            <Circle cx={0} cy={0} r={27} color={color} opacity={0.15} />
            <Circle cx={0} cy={0} r={18} color={color} opacity={0.15} />
            <Circle cx={0} cy={0} r={size} color={color}>
                <Paint style="stroke" strokeWidth={2} color="white" />
            </Circle>
        </Group>
    );
};

const useGraphTouchHandler = (x: SharedValue<number>, active: SharedValue<number>, width: number) => {
    const gesture = useMemo(
        () =>
            Gesture.Pan()
                .onChange((pos) => {
                    x.value += pos.x;
                    active.value = withSpring(1);
                })
                .onEnd(({ velocityX }) => {
                    x.value = withDecay({ velocity: velocityX, clamp: [0, width] });
                    active.value = withSpring(0);
                }),
        [width, x]
    );
    return gesture;
};