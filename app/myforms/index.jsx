import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Cards from "../../components/forms/cards.jsx";
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
        <View className="h-full">
            <Pressable
                className="bg-blue-500 p-4 rounded-lg m-4 h-20 justify-center items-center active:bg-blue-600"
                onPress={() => onPress("create")}
            >
                <Text className="text-white text-center font-semibold text-lg">
                    + Add Form
                </Text>
            </Pressable>
            <Cards cards={forms} />
        </View>
    );
}
