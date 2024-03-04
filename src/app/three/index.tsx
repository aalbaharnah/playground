import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";
import Touchable from "../../components/touchable";
import { useRouter } from "expo-router";
import products from "../../../assets/models/products";

export default function Three() {
    const rounter = useRouter();

    const onPress = (name: string) => {
        rounter.push(`/three/${name}`)
    }

    return (
        <View style={styles.root}>
            <View className="mx-6 items-end py-4 border-b border-[#cccccc]">
                <Text className="text-3xl font-bold">المنتجات</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16 }}>
                {products.map((item, index) => (
                    <Touchable
                        key={item.name + index}
                        className="mb-4 flex-row "
                        onPress={() => onPress(item.name)}
                    >
                        <View className=" flex-1 items-end p-4">
                            <Text className=" text-xl font-bold">{item.name}</Text>
                            <View className="flex-row items-center space-x-1">
                                <Animated.Text className=" text-xl">ريال</Animated.Text>
                                <Animated.Text className=" font-bold text-lg">{item.price}</Animated.Text>
                            </View>
                        </View>
                        <Image
                            className=" h-28 w-28 rounded-3xl"
                            source={item.image}
                        />
                    </Touchable>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})