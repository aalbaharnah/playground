
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeOut, ReduceMotion, WithSpringConfig, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { createContext, useContext, useLayoutEffect, useReducer } from "react";
import { Text, View } from "react-native";
import Touchable from "../components/touchable";

export type MessageAction = {
    title: string
    description: string
    type?: "success" | "error" | "warning" | "info"
}

export type MessageType = {
    id: string;
    title: string;
    description: string;
}

const ToastContext = createContext<{
    messages: MessageType[];
    addToast: (action: MessageAction) => void;
    removeToast: (id: string) => void;
    clearToasts?: () => void;
}>({
    messages: [],
    addToast: () => { },
    removeToast: (id: string) => { },
    clearToasts: () => { }
});



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

export default function ToastProvider(props: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state.messages)

    const addToast = (action: MessageAction) => {
        console.log(action)
        dispatch({
            type: "PUSH_MESSAGE",
            payload: {
                id: generateID(),
                title: action.title + " " + generateID(),
                description: action.description
            }
        })
    }

    const removeToast = (id: string) => {
        dispatch({ type: "REMOVE_MESSAGE", payload: id })
    }

    const clearToasts = () => {
        dispatch({ type: "CLEAR_MESSAGES" })
    }

    return (
        <ToastContext.Provider value={{ messages: state.messages, addToast, removeToast, clearToasts }}>
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

            {props.children}
        </ToastContext.Provider>
    )
}


export function generateID() {
    // take date in milliseconds and add random number to it
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000 + 1);
    return (random + timestamp).toString();
}

export function useToast() {
    return useContext(ToastContext);
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
        y.value = withSpring(-100, { velocity: 100 }, () => {
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