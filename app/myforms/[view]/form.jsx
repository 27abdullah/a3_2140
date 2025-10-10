import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ManageFields from "../../../components/form/manage.jsx";
import AddRecord from "../../../components/form/record.jsx";
import { getForm } from "../../../scripts/app.js";

export default function Form() {
    const [name, setName] = useState("");
    const [reload, setReload] = useState(false);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const params = useGlobalSearchParams();
    const id = params.view;

    useEffect(() => {
        const fetchData = async () => {
            const form = (await getForm(id))[0];
            setName(form.name);
            setDescription(form.description);
            setLoading(false);
        };
        fetchData();
    }, [reload]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView className="bg-gray-100 flex flex-col h-full w-full gap-y-4">
            <Text className="bg-emerald-300 py-2 text-center text-lg font-bold">
                Form - {name}
            </Text>
            <View className="px-6">
                <View className="py-4">
                    <Text className="bg-white text-black py-4 rounded-xl shadow-md text-lg text-center">
                        {description}
                    </Text>
                </View>
                <ManageFields id={id} setReload={setReload} />
                <AddRecord id={id} reload={reload} />
            </View>
        </ScrollView>
    );
}
