import { ScrollView, View } from "react-native";
import LineChart from "../../components/chart";


export default function LineChartScreen() {
    const height = 400;
    const margin = 20;
    const width = 400;

    return (
        <View className="flex-1">
            <LineChart />
        </View>
    )
}