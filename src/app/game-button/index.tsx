import { Text, View, StyleSheet, Pressable, PressableProps } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function GameButton() {

    return (
        <View className="flex-1">
            <View className="flex-1">

            </View>
            <View className="flex-row items-center justify-center h-24 px-4 space-x-2 bg-slate-900">
                <OptionButton style={styles.btn} title="الملاحظات" icon="clipboard-outline" />
                <OptionButton style={styles.btn} title="الجدول" icon="today-outline" />
                <OptionButton style={styles.btn} title="المهام" icon="golf-outline" />
            </View>
        </View>
    )
}

interface OptionButtonProps extends PressableProps {
    title: string;
    onPress?: () => void;
    borderColor?: string;
    icon: string;
}
const OptionButton = ({ title, onPress, icon, style, ...rest }: OptionButtonProps) => {
    const press = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderBottomWidth: interpolate(press.value, [0, 1], [5, 2]),
        };
    });

    const onPressIn = () => {
        press.value = withTiming(1, { duration: 200 })
    }

    const onPressOut = () => {
        press.value = withTiming(0, { duration: 400 })
    }

    return (
        <AnimatedPressable
            style={[style, animatedStyle]}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            {...rest}
        >
            <Ionicons name={icon as 'today'} size={18} color="white" />
            <Text className="text-white font-bold ml-1">{title}</Text>

        </AnimatedPressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderTopWidth: 1.4,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
    }
})