import { ScrollView, Text, View } from "react-native";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated";

export default function BouncyScrollView() {
    const ref = useAnimatedRef();
    const offsetY = useSharedValue(0);
    const height = useSharedValue(0);
    const margin = 20;
    const width = 400;

    const list = Array.from({ length: 40 }, (_, i) => i);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            if(event.contentOffset.y <= margin){
                offsetY.value = event.contentOffset.y;
            }
        },
        onEndDrag: (event) => {
            if (event.contentOffset.y < margin) {
                offsetY.value = withSpring(margin);
            }
        },
    });

    useDerivedValue(() => {
        console.log(offsetY.value);
    });

    const animatedStyles = useAnimatedStyle(() => ({
        height: offsetY.value,
    }))

    return (
        <View className="flex-1">

            <Animated.View
                style={[
                    animatedStyles,
                    {
                        backgroundColor: 'red',
                        borderRadius: 20,
                    }
                ]}
            />
            <Animated.ScrollView
                style={{ flex: 1 }}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                overScrollMode="never"
            >
                {list.map((item, index) => {
                    return (
                        <View
                            key={index}
                            className="bg-primary p-4 rounded-lg mb-2"
                        >
                            <Text className="text-white">Item {item}</Text>
                        </View>
                    )
                })}
            </Animated.ScrollView>

        </View>
    )
}