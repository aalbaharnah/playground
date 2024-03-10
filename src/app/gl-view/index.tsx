import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import Touchable from "../../components/touchable";
import { StatusBar } from "expo-status-bar";

export default function GLview() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Touchable>
        <View className="flex-row">
          <View className=" bg-gray-700 h-16 w-64 justify-center rounded-tl-2xl rounded-tr-2xl px-6">
            <Text className=" text-white text-lg ">{"Dec 22"}</Text>
          </View>

          <View className=" w-16 h-16 justify-end">
            <View className=" h-8 w-8 bg-gray-700" />

            <View style={{ transform: [{ rotate: '315deg' }] }} className=" z-30 absolute  w-16 h-16 items-center justify-center bg-gray-700 rounded-full border-8 border-black">
              <AntDesign name="arrowright" size={18} color="white" />
            </View>
          </View>
        </View>
        <View className=" w-80 bg-gray-700  h-44 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl px-6 py-6 ">
          <View className=" w-2/3">
            <Text className=" text-white text-xl">Royale Package Community</Text>
          </View>
          <View className="flex-1 justify-end">
            <View className=" flex-row items-center justify-between">
              <Text className=" text-white text-3xl font-bold">$2,983.92</Text>
              <View className="flex-row">
                <View className=" h-8 w-8 left-4 z-30 border-2 border-gray-700  bg-white rounded-full" />
                <View className=" h-8 w-8  left-2 z-20 border-2l,,,,,mmb border-gray-700 bg-white rounded-full" />
                <View className=" h-8 w-8   border-gray-700 bg-white rounded-full" />
              </View>
            </View>
          </View>
        </View>


      </Touchable>

    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    alignItems: 'center',
  }
})