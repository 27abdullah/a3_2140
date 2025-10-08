import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Cards from "../../components/card/cards.jsx";
import { getForms } from "../../scripts/app.js";

export default function Index() {
    const router = useRouter();
    const [forms, setForms] = useState([]);
    const onPress = (link) => {
        router.push("/myforms/" + link);
    };

    useEffect(() => {
        try {
            const fetchData = async () => {
                const forms = await getForms();
                setForms(forms);
            };
            fetchData();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    return (
        <View className="h-full bg-gray-100">
            <Pressable
                className="bg-emerald-300 p-4 rounded-lg m-4 h-20 justify-center items-center active:bg-emerald-600"
                onPress={() => onPress("/add")}
            >
                <Text className="text-black text-center font-semibold text-xl">
                    + Add Form
                </Text>
            </Pressable>
            <Cards cards={forms} />
        </View>
    );
}
