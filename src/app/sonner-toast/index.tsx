import { Text, View } from "react-native";
import OptionButton from "../../components/option-button";
import { useLayoutEffect, useReducer } from "react";
import { generateID } from "../../lib/utils";
import Touchable from "../../components/touchable";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeOut, FadeOutUp, ReduceMotion, WithSpringConfig, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";


type MessageType = {
    id: string;
    title: string;
    description: string;
}

const initialState: { messages: MessageType[] } = {
    messages: [],
}

const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
        case "PUSH_MESSAGE":
            const messages = [...state.messages, action.payload];
            if (messages.length > 3) messages.shift();
            return { ...state, messages }
        case "POP_MESSAGE":
            return { ...state, messages: state.messages.splice(1, state.messages.length) }
        case "CLEAR_MESSAGES":
            return { ...state, messages: [] }
        case "REMOVE_MESSAGE":
            return { ...state, messages: state.messages.filter((m) => m.id !== action.payload) }
        default:
            return state;
    }
}

export default function SonnerToast() {
    const [state, dispatch] = useReducer(reducer, initialState);


    const onPress = () => dispatch({
        type: "PUSH_MESSAGE",
        payload: {
            id: generateID(),
            title: "عنوان الرسالة" + " " + generateID(),
            description: "وصف الرسالة"
        }
    })

    return (
        <View className="flex-1 items-center justify-center">

            {state.messages.map((message, index) => {
                return (
                    <Message
                        key={message.id}
                        index={index}
                        message={message}
                        scale={state.messages.length - index}
                        onPress={() => dispatch({ type: "REMOVE_MESSAGE", payload: message.id })}
                    />
                )
            })}


            <OptionButton
                title="عرض رسالة"
                borderColor="black"
                onPress={onPress}
            />
        </View>
    )
}

interface MessageProps {
    message: MessageType;
    onPress: () => void;
    index: number;
    scale: number;
}

const config: WithSpringConfig = {
    mass: 1,
    damping: 23,
    stiffness: 255,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System
}

function Message({ message, onPress, index, scale }: MessageProps) {
    const y = useSharedValue(0);
    const scaleValue = useSharedValue(scale);

    useLayoutEffect(() => {
        scaleValue.value = withSpring(scale, config);
        y.value = withSpring(100 - (index * 12), config);
    }, [scale])

    useLayoutEffect(() => {
        y.value = withSpring(100 - (index * 12), config);
    }, [])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: y.value
                }, {
                    scale: interpolate(scaleValue.value, [1, 2, 3], [1, 0.9, 0.8])
                }]
        }
    }, [index])

    const onPop = () => {
        y.value = withTiming(-100, { duration: 180 }, () => {
            runOnJS(onPress)();
        })
    }

    return (
        <Animated.View
            className="absolute bg-white top-0 mx-4 p-4 rounded-lg shadow w-11/12"
            style={[animatedStyle, { zIndex: 90 + index }]}
            exiting={FadeOut}
        >
            <View className="flex-row items-center justify-between">
                <View>
                    <Text className="font-bold text-lg">{message.title}</Text>
                    <Text className="text-gray-500">{message.description}</Text>
                </View>
                <Touchable onPress={onPop}>
                    <Ionicons name="close" size={18} color="black" />
                </Touchable>
            </View>
        </Animated.View>
    )
}