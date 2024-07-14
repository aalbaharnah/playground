import { Text, View, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";
import Touchable from "../components/touchable";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
    const routes = [
        'drag-emoji',
        'email-client',
        'three',
        'gl-view',
        'bicycle',
        'cube',
        'game-button',
        'sonner-toast',
        'line-chart'
    ]
    return (
        <View className="flex-1  bg-background" style={{ paddingTop: Constants.statusBarHeight }}>
            <FlatList
                data={routes}
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