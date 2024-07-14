import { View } from "react-native";
import LineChart from "../../components/chart";
import { data } from "../../components/chart/data";

export default function LineChartScreen() {
    const height = 400;
    const margin = 10;
    const width = 400;

    return (
        <View className="flex-1">
            <LineChart {...{ data, height, margin, width }} />
        </View>
    )
}