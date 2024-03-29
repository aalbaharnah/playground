import { View, StyleSheet, Text, Image } from "react-native";
import { Canvas } from '@react-three/fiber';
import Animated, { ReduceMotion, WithSpringConfig, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import useDimensions from "../../../hooks/useDimensions";
import products, { Product } from "../../../../assets/models/products";
import { useLocalSearchParams, useRouter } from "expo-router";
import Model from "../../../components/three/model";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Touchable from "../../../components/touchable";
import { ArrowLeft, BoxAlt, Gem, Interlining, ShoppingBag } from "../../../components/icons";
import { ContactShadows } from "@react-three/drei/native";


const configs: WithSpringConfig = {
    mass: 1,
    damping: 23,
    stiffness: 255,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
    reduceMotion: ReduceMotion.System
}

const maxHeights = 2.4
const minHeights = 3.5

const maxScale = 2.3;
const minScale = 1.8;

const maxPosition = -2.4;
const minPoistion = -1;

export default function ProductPage() {
    const dim = useDimensions('screen');
    const params = useLocalSearchParams();
    const router = useRouter();
    const { id } = params;

    const [item, setItem] = useState<Product | null>(null);

    useEffect(() => {
        const product = products.find(item => item.name === id);
        if (product) setItem(product);
    }, [id])


    const y = useSharedValue(0);
    const scale = useSharedValue(maxScale);
    const position = useSharedValue(maxPosition);
    const height = useSharedValue((dim.height - Constants.statusBarHeight) / maxHeights);

    const onScoll = useAnimatedScrollHandler((event) => {
        y.value = event.contentOffset.y;
    })

    const animatedStyle = useAnimatedStyle(() => ({
        height: height.value,
    }))

    const animatedCategoryHeight = useAnimatedStyle(() => ({
        height: interpolate(scale.value, [maxScale, minScale], [24, 0], 'clamp'),
    }))

    const animatedText = useAnimatedStyle(() => ({
        fontSize: interpolate(scale.value, [maxScale, minScale], [30, 24], 'clamp'),
    }))

    const animatedCurrency = useAnimatedStyle(() => ({
        fontSize: interpolate(scale.value, [maxScale, minScale], [20, 14], 'clamp'),
    }))

    useDerivedValue(() => {
        if (y.value > 50) {
            height.value = withSpring((dim.height - Constants.statusBarHeight) / minHeights, configs);
            scale.value = withSpring(minScale);
            position.value = withSpring(minPoistion, configs);
        } else {
            height.value = withSpring((dim.height - Constants.statusBarHeight) / maxHeights, configs);
            scale.value = withSpring(maxScale);
            position.value = withSpring(maxPosition, configs);
        }
    }, [])

    return (
        <View style={styles.root}>
            <View className="flex-row justify-between px-4 pb-2 ">
                <Touchable
                    className="h-12 w-12 justify-center items-center"
                    onPress={() => router.back()}
                >
                    <ArrowLeft height={30} width={30} />
                </Touchable>

                <Touchable className="h-12 w-12 justify-center items-center">
                    <ShoppingBag height={26} width={26} />
                </Touchable>
            </View>
            <Animated.View style={animatedStyle} className="bg-white rounded-3xl mx-4" />
            <View style={{ marginTop: Constants.statusBarHeight + 48, height: 300 }} className=" absolute w-full  ">
                <Canvas shadows='soft' >
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[0, 10, 0]} angle={0.15} penumbra={2} decay={0} intensity={Math.PI} />
                    <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                    </directionalLight>
                    <Model scale={scale} position={position} model={item?.model} />
                </Canvas>
            </View>

            <View className="px-6 py-4">
                <Animated.View style={animatedCategoryHeight}>
                    <Animated.Text className=" font-bold text-[#b8b8b8] text-right">مجسمات</Animated.Text>
                </Animated.View>
                <View className="flex-row items-center justify-between w-full">
                    <View className="flex-row items-baseline space-x-2">
                        <Animated.Text className="text-[#374957]" style={animatedCurrency}>ريال</Animated.Text>
                        <Animated.Text style={animatedText} className=" font-bold">{item?.price}</Animated.Text>
                    </View>
                    <Animated.Text style={animatedText} className=" font-bold text-right">{item?.name}</Animated.Text>
                </View>
            </View>

            <Animated.ScrollView onScroll={onScoll} contentContainerStyle={{ paddingBottom: 24 }}>
                <View className="px-6">
                    <Animated.Text className="text-right text-lg pb-8">
                        {item?.description}
                    </Animated.Text>
                </View>

                <View className="mb-8 px-6 flex-row flex-wrap justify-end">
                    <View style={{ width: (dim.width / 2) - 28 }} className="mb-4">
                        <View className="flex-row space-x-2 items-center justify-end">
                            <Text className="text-right font-semibold text-base mx-2">المادة</Text>
                            <Gem width={22.5} height={22.5} />
                        </View>
                        <Text className=" text-right mr-8 text-base">طين</Text>
                    </View>
                    <View style={{ width: (dim.width / 2) - 28 }} className="mb-4">
                        <View className="flex-row space-x-2 items-center justify-end">
                            <Text className="text-right font-semibold text-base mx-2">التوصيل</Text>
                            <BoxAlt width={22} height={22} />
                        </View>
                        <Text className=" text-right mr-7 text-base">مجاناً</Text>
                    </View>
                    <View style={{ width: (dim.width / 2) - 28 }}>
                        <View className="flex-row items-center justify-end">
                            <Text className="text-right text-base font-semibold mx-2">المقاسات</Text>
                            <Interlining height={22} width={22} />
                        </View>
                        <View className="flex-row items-center justify-end space-x-2 mr-8">
                            <Text className="text-right text-base">سم</Text>
                            <Text className="text-right text-base">٣٠٠٠٠ x ٢٠٠٠</Text>
                        </View>
                    </View>
                </View>

                <View className="mb-8">
                    <View className="flex-row items-center justify-end mx-6 space-x-2 py-2 border-b border-t border-[#cccccc]">
                        <Text className="font-bold text-xl">يمكن يعجبك</Text>
                    </View>
                    <Animated.ScrollView
                        horizontal
                        contentContainerStyle={{ paddingVertical: 16 }}
                        showsHorizontalScrollIndicator={false}

                    >
                        {products.filter(p => p.name !== id).map((product, index) => (

                            <Touchable
                                key={product.name + index}
                                className=" mx-4 rounded-3xl"
                                onPress={() => router.push(`/three/products/${product.name}`)}
                            >
                                <Image
                                    source={product.image}
                                    className="rounded-3xl h-24 w-24"
                                />
                                <Text className="text-center mt-2 font-bold">{product.name}</Text>
                            </Touchable>

                        ))}
                    </Animated.ScrollView>
                </View>

                <View className="flex-row items-center justify-end mx-6 space-x-2 py-2 border-b border-t border-[#cccccc]">
                    <View className="flex-row items-center space-x-2 px-2 border-r border-[#cccccc]">
                        <AntDesign name="staro" size={18} color="#333333" />
                        <Text className="font-bold text-xl">٤.٣</Text>
                    </View>
                    <View className="flex-1 items-end">
                        <Text className="font-bold text-xl">المراجعات</Text>
                    </View>
                </View>


                <View>
                    {reviews.map((review, index) => (
                        <View className="mx-4 p-2 mb-2 rounded-xl ">
                            <Text className="text-right mb-1">{review.date}</Text>
                            <View className="flex-row items-center space-x-2 justify-end">
                                <Text className="text-right">{review.stars} نجوم</Text>
                                <View style={{ height: 4, width: 4, backgroundColor: 'black' }} />
                                <Text className="text-right font-bold text-lg">{review.name}</Text>
                            </View>
                            <Text className="text-right text-lg">{review.review}</Text>
                        </View>
                    ))}
                </View>

                <View style={{ height: 500 }} />

            </Animated.ScrollView>

            <View>
                <Touchable
                    className="absolute bottom-0 w-full pt-4 pb-8 bg-emerald-500 items-center justify-center"
                    onPress={() => router.push('cart')}
                >
                    <Text className="text-white text-xl font-bold">أضف إلى السلة</Text>
                </Touchable>
            </View>
        </View>
    )
}


const reviews = [
    {
        name: 'عبدالله',
        stars: 5,
        date: 'قبل ١٧ ساعة',
        review: "هذا الدبدوب هو الأفضل! إنه ناعم للغاية وأكبر مما كنت أتوقع",
    },
    {
        name: 'مازن',
        stars: 4,
        date: 'فبراير ٢٥',
        review: "دبدوب لطيف جدًا لهدية! الجودة تبدو جيدة، والشحن كان سريعًا. أوصي به",
    },
    {
        name: 'يسرى',
        stars: 5,
        date: 'فبراير ١٩',
        review: "كنت أبحث عن دبدوب كبير وهذا يناسب تمامًا."
    },
    {
        name: 'ياسر',
        stars: 3,
        date: 'فبراير ٤',
        review: "الدبدوب على ما يرام. إنه لطيف لكنه ليس بهذا الحجم الكبير. لا بأس به بالسعر."
    },
    {
        name: "هايدي",
        stars: 4,
        date: 'يناير ٢٢',
        review: "ممتاز"
    },
    {
        name: "ماهر",
        stars: 5,
        date: 'يناير ١',
        review: "هذا الدبدوب ناعم جدًا ومصنوع بشكل جيد. بالتأكيد قيمة جيدة مقابل المال."
    }
]

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})