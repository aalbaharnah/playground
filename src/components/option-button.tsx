import { Text, View, StyleSheet, Pressable, PressableProps } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);


interface OptionButtonProps extends PressableProps {
    title: string;
    onPress?: () => void;
    borderColor?: string;
    icon?: string;
}
export default function OptionButton({ title, onPress, icon, style, ...rest }: OptionButtonProps) {
    const press = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderBottomWidth: interpolate(press.value, [0, 1], [5, 2]),
        };
    });

    const onPressIn = () => {
        press.value = withTiming(1, { duration: 100 })
    }

    const onPressOut = () => {
        press.value = withTiming(0, { duration: Math.PI * 100 })
    }

    return (
        <AnimatedPressable
            style={[style, styles.btn, animatedStyle]}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            {...rest}
        >
            <Ionicons name={icon as 'today'} size={18} color="white" />
            <Text className="font-bold ml-1">{title}</Text>

        </AnimatedPressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderTopWidth: 1.4,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
    }
})