import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ManageFields from "../../../components/form/manage.jsx";
import AddRecord from "../../../components/form/record.jsx";
import { getForm } from "../../../scripts/app.js";

export default function Form() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const params = useLocalSearchParams();
    const id = params.view;

    useEffect(() => {
        const fetchData = async () => {
            const form = (await getForm(id))[0];
            setName(form.name);
            setDescription(form.description);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View className="bg-gray-100 flex flex-col h-full w-full gap-y-4">
            <Text className="bg-emerald-300 py-2 text-center text-lg font-bold">
                Form - {name}
            </Text>
            <View className="px-6">
                <View className="pb-3">
                    <Text className="bg-white text-black py-4 rounded-xl shadow-md text-lg text-center">
                        {description}
                    </Text>
                </View>
                <ManageFields id={id} />
                <AddRecord id={id} />
            </View>
        </View>
    );
}
