import { Text, View, DeviceEventEmitter } from "react-native";
import { Feather } from '@expo/vector-icons';
import Touchable from "../../components/touchable";
import { Option } from "../../components/email-client/option";
import Folder from "../../components/email-client/folder";
import Mail from "../../components/email-client/mail";
import { createContext, useContext, useState } from "react";
import Animated, { CurvedTransition, Easing, LinearTransition } from "react-native-reanimated";
import { generateID } from "../../lib/utils";
import EmailProvider from "../../context/email-context";

type Email = {
    sender: string;
    subject: string;
    content: string;
    id: string;
}

export default function EmailClient() {
    const [data, setData] = useState<Email[]>([]);

    const [selected, setSelected] = useState<string[]>([]);

    const addEmails = () => {
        const id = generateID();
        const email: Email = { ...emails[Math.floor(Math.random() * emails.length)], id };
        setData((prev) => [email, ...prev]);
    }

    const deleteEmail = (id: string) => {
        setData((prev) => prev.filter((i) => i.id !== id));
    }

    const deleteSelected = () => {
        // setData((prev) => prev.filter((i) => !selected.includes(i.id)));
        DeviceEventEmitter.emit('mail-delete', selected);
        setSelected([]);
    }

    const onSelectEmail = (id: string) => {
        setSelected((prev) => selected.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
    }

    return (
        <View className="flex-1 bg-[#F4EAE0] flex-row md:p-8">
            <View className="flex-1 bg-white  rounded-3xl">
                <View className="flex-row items-center mt-16 md:mt-0 pt-12 md:pt-0 py-2 border-b border-[#F4DFC8] justify-between mx-4">
                    <Touchable className="p-2" onPress={() => deleteSelected()}>
                        <Feather name="trash" size={20} color="#000" />
                    </Touchable>
                    <View className="flex-row items-center">
                        <Touchable className="p-2">
                            <Feather name="search" size={20} color="#000" />
                        </Touchable>
                        <Touchable className="p-2" onPress={() => addEmails()}>
                            <Feather name="message-square" size={20} color="#000" />
                        </Touchable>
                    </View>
                </View>
                <Animated.ScrollView
                    contentContainerStyle={{ paddingTop: 8 }}
                    style={{ flexGrow: 0 }}
                    showsVerticalScrollIndicator={false}
                >
                    {data.map((item, index) => (
                        <Mail
                            key={item.id}
                            id={item.id}
                            name={item.sender}
                            message={item.content}
                            subject={item.subject}
                            selected={selected.includes(item.id)}
                            onPress={() => onSelectEmail(item.id)}
                            onDelete={() => deleteEmail(item.id)}
                        />
                    ))}
                </Animated.ScrollView>

            </View>
            <View className=" hidden md:flex" style={{ flex: 0.3333 }}>
                <View className="ml-5 border-b border-[#ebd9c6] ">
                    <Touchable className=" flex-row items-center p-4 bg-white justify-end rounded-3xl "
                        onPress={() => addEmails()}
                    >
                        <Text className="mr-4 font-semibold">{"رسالة"}</Text>
                        <Feather name="plus" size={24} color="#000" />
                    </Touchable>
                    <Option
                        icon="inbox"
                        count={14}
                        name="الوارد"
                    />

                    <Option
                        icon="star"
                        count={7}
                        name="المفضل"
                    />

                    <Option
                        icon="send"
                        count={4}
                        name="المرسل"
                    />

                    <Option
                        icon="file"
                        count={10}
                        name="المسودات"
                    />

                    <Option
                        icon="trash"
                        count={3}
                        name="المحذوف"
                    />
                </View>
                <View className="ml-5 ">
                    <Touchable className=" flex-row items-center justify-between py-4 px-3 ">
                        <Feather name="plus" size={18} color="#aa753c" />
                        <Text className="text-sm font-semibold text-[#aa753c]">الملفات</Text>
                    </Touchable>

                    <Folder
                        name="أزرق"
                        count={14}
                        color="#056CC1"
                    />


                    <Touchable className=" flex-row items-center justify-between px-4 py-2 ">
                        <Text className="font-semibold">7</Text>
                        <View className="flex-row items-center justify-end ">
                            <Text className="mr-4 font-semibold text-[#DF1E1E]">أحمر</Text>
                            <Feather name="square" size={18} color="#DF1E1E" />
                        </View>
                    </Touchable>
                    <Touchable className=" flex-row items-center justify-between px-4 py-2 ">
                        <Text className="font-semibold">6</Text>
                        <View className="flex-row items-center justify-end ">
                            <Text className="mr-4 font-semibold text-[#F2AC3C]">برتقالي</Text>
                            <Feather name="square" size={18} color="#F2AC3C" />
                        </View>
                    </Touchable>
                </View>

            </View>
        </View>
    )
}

const emails = [
    {
        sender: "سمير خليل",
        subject: "التطوير سهل مثل لعبة الأطفال",
        content: "برمجتنا سهلة الاستخدام، كأنك تلعب لعبة أطفال. واجهة المستخدم بسيطة وسهلة الفهم، ولا تجعل المستخدم يتوه في متاهات التطبيق."
    },
    {
        sender: "فؤاد عبد العزيز",
        subject: "التصميم الجيد يجذب المستخدم",
        content: "تصميمنا جميل وجذاب، مثل لوحة فنية. واجهة المستخدم بسيطة وواضحة، ولا تجعل المستخدم يشعر بالملل."
    },
    {
        sender: "كوكو محمد",
        subject: "الوظائف المتنوعة تُرضي الجميع",
        content: "برمجتنا غنية بالوظائف، مثل بستان مليء بالثمار. واجهة المستخدم غنية بالوظائف، ولا تجعل المستخدم يبحث عن وظائف التطبيق في متاهات التطبيق."
    },
    {
        sender: "ريم أحمد",
        subject: "التوافق مع جميع الأجهزة ضروري",
        content: "برمجتنا تتوافق مع جميع الأجهزة، مثل قفاز يناسب جميع الأيدي. واجهة المستخدم تتوافق مع جميع الأجهزة وأحجام الشاشات، ولا تجعل المستخدم يشعر بعدم الراحة عند استخدام التطبيق."
    },
    {
        sender: "بكر خالد",
        subject: "السرعة تُبهر المستخدم",
        content: "برمجتنا سريعة مثل البرق، لا تضيع وقت المستخدم. واجهة المستخدم سريعة وفعالة، ولا تجعل المستخدم ينتظر تحميل التطبيق أو تنفيذ وظائفه."
    },
    {
        sender: "هيلة عبد الرحمن",
        subject: "الابتكار يُضفي الحيوية على التطبيق",
        content: "برمجتنا مبتكرة مثل لوحة فنية، تقدم للمستخدم تجربة جديدة. واجهة المستخدم مبتكرة وجديدة، ولا تجعل المستخدم يشعر بالملل من نفس التصميمات القديمة."
    },
    {
        sender: "خالد فهد",
        subject: "الاختبار يُجنّب الأخطاء",
        content: "برمجتنا تم اختبارها بدقة، مثل ساعة تم اختبارها بدقة. واجهة المستخدم خالية من الأخطاء، ولا تجعل المستخدم يواجه مشاكل عند استخدام التطبيق."
    },
    {
        sender: "سارة سليمان",
        subject: "رأي المستخدم هو الأهم",
        content: "نستمع لاحتياجات المستخدم، فهو صاحب القرار في النهاية. واجهة المستخدم تلبي احتياجات المستخدم، ولا تجعل المستخدم يشعر بعدم الرضا عن التطبيق."
    },
    {
        sender: "أبو بكر",
        subject: "التطوير المستمر يُواكب التطورات",
        content: "لا نتوقف عن تطوير برمجتنا، مثل نهر يجري بلا توقف. واجهة المستخدم تتطور باستمرار، ولا تجعل المستخدم يشعر بالملل من نفس التصميمات القديمة."
    },
    {
        sender: "أم بكر",
        subject: "التعاون يُنجز العمل",
        content: "نعمل كفريق واحد، مثل عائلة واحدة. واجهة المستخدم هي نتاج عمل جماعي، ولا تجعل المستخدم يشعر بعدم الرضا عن التطبيق."
    },
    {
        sender: "سمير خليل",
        subject: "السهولة تُزيل العقبات",
        content: "برمجتنا سهلة الاستخدام، مثل كوب ماء بارد. واجهة المستخدم سهلة وسلسة، ولا تجعل المستخدم يتوه في متاهات التطبيق."
    },
    {
        sender: "فؤاد عبد العزيز",
        subject: "التصميم الجيد يُغري المستخدم",
        content: "تصميمنا جميل وجذاب، مثل فتاة جميلة. واجهة المستخدم بسيطة وواضحة، ولا تجعل المستخدم يشعر بالملل."
    },
    {
        sender: "كوكو محمد",
        subject: "الوظائف المتنوعة تُثري التطبيق",
        content: "برمجتنا غنية بالوظائف، مثل مكتبة مليئة بالكتب. واجهة المستخدم غنية بالوظائف، ولا تجعل المستخدم يبحث عن وظائف التطبيق في متاهات التطبيق."
    },
    {
        sender: "ريم أحمد",
        subject: "التوافق ضروري لراحة المستخدم",
        content: "برمجتنا تتوافق مع جميع الأجهزة، مثل ثوب يناسب جميع الأجسام. واجهة المستخدم تتوافق مع جميع الأجهزة وأحجام الشاشات، ولا تجعل المستخدم يشعر بعدم الراحة عند استخدام التطبيق."
    },
    {
        sender: "بكر خالد",
        subject: "السرعة تُوفر الوقت",
        content: "برمجتنا سريعة مثل الريح، لا تضيع وقت المستخدم. واجهة المستخدم سريعة وفعالة، ولا تجعل المستخدم ينتظر تحميل التطبيق أو تنفيذ وظائفه."
    },
    {
        sender: "هيلة عبد الرحمن",
        subject: "الابتكار يُضفي تميزاً على التطبيق",
        content: "برمجتنا مبتكرة مثل أغنية جديدة. واجهة المستخدم مبتكرة وجديدة، ولا تجعل المستخدم يشعر بالملل من نفس التصميمات القديمة."
    },
    {
        sender: "خالد فهد",
        subject: "الاختبار يُجنّب الأخطاء",
        content: "برمجتنا تم اختبارها بدقة، مثل طبيب يُجري فحصًا دقيقًا. واجهة المستخدم خالية من الأخطاء، ولا تجعل المستخدم يواجه مشاكل عند استخدام التطبيق."
    },
    {
        sender: "سارة سليمان",
        subject: "رأي المستخدم هو البوصلة",
        content: "نستمع لاحتياجات المستخدم، فهو صاحب القرار في النهاية. واجهة المستخدم تلبي احتياجات المستخدم، ولا تجعل المستخدم يشعر بعدم الرضا عن التطبيق."
    },
    {
        sender: "أبو بكر",
        subject: "التطوير المستمر يُواكب التطورات",
        content: "لا نتوقف عن تطوير برمجتنا، مثل شجرة تنمو باستمرار. واجهة المستخدم تتطور باستمرار، ولا تجعل المستخدم يشعر بالملل من نفس التصميمات القديمة."
    },
    {
        sender: "أم بكر",
        subject: "التعاون يُنجز العمل",
        content: "نعمل كفريق واحد، مثل خلية نحل. واجهة المستخدم هي نتاج عمل جماعي، ولا تجعل المستخدم يشعر بعدم الرضا عن التطبيق."
    }


]