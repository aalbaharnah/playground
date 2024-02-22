import { Platform, Text, View, StyleSheet, FlatList } from "react-native";
import AddPlayersStep from "../components/steps/add-players";
import Constants from "expo-constants";
import Animated, { Easing, interpolate, interpolateColor, runOnJS, scrollTo, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import useDimensions from "../hooks/useDimensions";
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { ReText } from "react-native-redash";
import Touchable from "../components/touchable";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

    return (
        <View className="flex-1  bg-background" style={{ paddingTop: Constants.statusBarHeight }}>
            <FlatList
                data={['drag-emoji', 'email-client']}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <View className="h-1 " />}
                renderItem={({ item }) => (
                    <Touchable
                        className="h-12 flex-row bg-emerald-200 items-center border-t border-b border-white justify-between px-8 "
                        onPress={() => router.push(item)}
                    >
                        <Text className=" text-lg ">{item}</Text>
                        <Ionicons name="arrow-forward" size={18} color="#000" />
                    </Touchable>
                )}
            />
        </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        overflow: 'hidden',
    },
});