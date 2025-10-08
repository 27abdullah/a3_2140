import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { editForm, getForm } from "../../../scripts/app.js";

export default function Edit() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const params = useLocalSearchParams();
    const id = params.edit;
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const form = await getForm(id);
            setName(form[0].name);
            setDescription(form[0].description);
        };
        fetchData();
    }, []);

    if (!name || !description) {
        return <Text>Loading...</Text>;
    }

    return (
        <View className="p-6 bg-white rounded-xl flex ">
            <Text className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                Edit Form
            </Text>
            <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
                value={name}
                onChangeText={setName}
                placeholder="Form Name"
            />
            <TextInput
                className="border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base"
                value={description}
                onChangeText={setDescription}
                placeholder="Form Description"
            />
            <Pressable
                className="bg-emerald-600 rounded-lg py-3 active:bg-emerald-700"
                onPress={async () => {
                    await editForm(id, name, description);
                    router.push("/myforms");
                }}
            >
                <Text className="text-white text-center font-semibold text-lg">
                    Save Changes
                </Text>
            </Pressable>
        </View>
    );
}
