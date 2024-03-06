import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import Touchable from "../touchable";

interface FolderProps {
    name: string;
    count: number;
    color: string;
}

export default function Folder(props: FolderProps) {
    return (
        <Touchable className="flex-row items-center  justify-between px-4 py-2 ">
            <Text className="font-semibold">{props.count}</Text>
            <View className="flex-row items-center justify-end ">
                <Text className={`mr-4 font-rawasi-bold text-base top-1 text-[${props.color}]`}>{props.name}</Text>
                <Feather name="square" size={18} color={props.color} />
            </View>
        </Touchable>
    )
}