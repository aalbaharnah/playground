export type Product = {
    name: string;
    description: string;
    price: number;
    image: any;
    model: any;
}

const products: Product[] = [
    {
        name: "دبدوب",
        description: "هذا الدبدوب البني الكبير واللطيف جاهز لك! فروه الناعم وابتسامته الرائعة سيجلبان الفرح لشخصك المميز.",
        price: 140,
        image: require('./bear.png'),
        model: require('./bear.gltf')
    },
    {
        name: "بطوط",
        description: "هذا البطوط الأصفر الكبير واللطيف جاهز لك! فروه الناعم وابتسامته الرائعة سيجلبان الفرح لشخصك المميز.",
        price: 200,
        image: require('./duck.png'),
        model: require('./duck.gltf')
    },
    {
        name: "كلوب",
        description: "هذا الكلوب الأزرق الكبير واللطيف جاهز لك! فروه الناعم وابتسامته الرائعة سيجلبان الفرح لشخصك المميز.",
        price: 120,
        image: require('./dog.png'),
        model: require('./dog.gltf')
    },
    {
        name: "ساحرة",
        description: "هذه الساحرة السوداء الكبيرة واللطيفة جاهزة لك! فروها الناعم وابتسامتها الرائعة ستجلبان الفرح لشخصك المميز.",
        price: 300,
        image: require('./witch.png'),
        model: require('./witch.gltf')
    },
    {
        name: "كرة الشاطئ",
        description: "هذه الكرة الكبيرة واللطيفة جاهزة لك! فروها الناعم وابتسامتها الرائعة ستجلبان الفرح لشخصك المميز.",
        price: 80,
        image: require('./beach-ball.png'),
        model: require('./beach-ball.gltf')
    }
]

export default products;