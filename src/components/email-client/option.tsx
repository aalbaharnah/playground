import { Text, View } from "react-native";
import Touchable from "../touchable";

interface OptionProps {
    icon: React.ReactNode;
    count: number;
    name: string;
}

export function Option(props: OptionProps) {
    return (
        <Touchable className=" flex-row items-center justify-between p-4 ">
            <Text className="font-semibold">{props.count}</Text>
            <View className="flex-row items-center justify-end ">
                <Text className="mr-4 font-rawasi-bold text-lg top-1">{props.name}</Text>
                {props.icon}
            </View>
        </Touchable>
    )
}

