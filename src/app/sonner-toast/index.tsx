import { StyleSheet, Text, View } from "react-native";
import OptionButton from "../../components/option-button";
import { useLayoutEffect, useReducer, useState } from "react";
import { generateID } from "../../lib/utils";
import Touchable from "../../components/touchable";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeOut, FadeOutUp, ReduceMotion, WithSpringConfig, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";


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
    const offsetY = useSharedValue(0);
    const scaleValue = useSharedValue(scale);

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

    useLayoutEffect(() => {
        scaleValue.value = withSpring(scale, config);
        y.value = withSpring(100 - (index * 12), config);
    }, [scale])

    useLayoutEffect(() => {
        y.value = withSpring(100 - (index * 12), config);
        setTimer(setTimeout(() => {
            onPop()
        }, 2000))
    }, [])

    const pan = Gesture.Pan()
        .onBegin(() => {
            if (timer) {
                runOnJS(clearTimeout)(timer);
            }
        })
        .onChange((event) => {
            console.log(event.translationY)
            if (event.translationY < 200) {
                offsetY.value = event.translationY;
            }
        })
        .onFinalize(() => {
            if(offsetY.value < -20) {
                onPop();
            }
            offsetY.value = withSpring(0, config);
        });


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: y.value + offsetY.value
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
        <GestureDetector gesture={pan}>
            <Animated.View
                style={[animatedStyle, styles.toast, { zIndex: 90 + index }]}
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
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        top: 0,
        width: '91.666667%',
        maxWidth: 460,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        backgroundColor: 'white',
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
})