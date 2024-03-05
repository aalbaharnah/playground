export type Product = {
    name: string;
    description: string;
    price: string;
    image: any;
    model: any;
}

const products: Product[] = [
    {
        name: "دبدوب",
        description: "هذا الدبدوب البني الكبير واللطيف جاهز لك! فروه الناعم وابتسامته الرائعة سيجلبان الفرح لنفسك المميزة.",
        price: "١٤٠",
        image: require('./bear.png'),
        model: require('./bear.gltf')
    },
    {
        name: "بطوط",
        description: "هذا البطوط الأبيض الكبير واللطيف جاهز لك! ريشه الناعم وابتسامته الرائعة سيجلبان الفرح لنفسك المميزة.",
        price: "٢٠٠",
        image: require('./duck.png'),
        model: require('./duck.gltf')
    },
    {
        name: "كلّوب",
        description: "هذا الكلّوب البني الكبير واللطيف جاهز لك! فروه الناعم وابتسامته الرائعة سيجلبان الفرح لنفسك المميزة.",
        price: "١٢٠",
        image: require('./dog.png'),
        model: require('./dog.gltf')
    },
    {
        name: "سحرور",
        description: "هذه الساحرة الزرقاء الكبيرة واللطيفة جاهزة لك! شعرها الناعم وابتسامتها الرائعة ستجلبان الفرح لنفسك المميزة.",
        price: "٣٠٠",
        image: require('./witch.png'),
        model: require('./witch.gltf')
    },
    {
        name: "كرة الشاطئ",
        description: "هذه الكرة الكبيرة واللطيفة جاهزة لك! فروها الناعم وابتسامتها الرائعة ستجلبان الفرح لنفسك المميزة.",
        price: "٨٠",
        image: require('./beach-ball.png'),
        model: require('./beach-ball.gltf')
    }
]

export default products;