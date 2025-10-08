import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { createForm } from "../../scripts/app";

export default function Add() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();
    const submitForm = async () => {
        const res = await createForm(name, description);
        router.push("/myforms");
    };

    return (
        <View className="p-6 bg-white rounded-xl flex ">
            <Text className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                Add Form
            </Text>

            <TextInput
                placeholder="Form Name"
                value={name}
                onChangeText={setName}
                className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
                placeholderTextColor="#9ca3af"
            />

            <TextInput
                placeholder="Form Description"
                value={description}
                onChangeText={setDescription}
                className="border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base"
                placeholderTextColor="#9ca3af"
            />

            <Pressable
                onPress={submitForm}
                className="bg-emerald-600 rounded-lg py-3 active:bg-emerald-700"
            >
                <Text className="text-white text-center font-semibold text-base">
                    Submit
                </Text>
            </Pressable>
        </View>
    );
}
