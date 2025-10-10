import { useFocusEffect, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import Card from "../../../components/record/card.jsx";
import { getRecords } from "../../../scripts/app";

export default function Records() {
    const params = useGlobalSearchParams();
    const id = params.view;
    const [records, setRecords] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                const recs = await getRecords(id);
                setRecords(recs);
            };

            try {
                fetchData();
            } catch (error) {
                console.error("Error fetching records:", error);
                Alert.alert(
                    "There was an error fetching the records. Please try again."
                );
            }
        }, [])
    );

    if (records.length === 0) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50 p-4">
                <View className="bg-white p-6 rounded-lg shadow text-center">
                    <View className="mb-4">
                        <Text className="text-lg font-semibold mb-2">
                            No Records Found
                        </Text>
                        <Text className="text-gray-600">
                            There are no records available for this form.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 p-4 bg-gray-50">
            {records.map((record, index) => (
                <View
                    key={index}
                    className="bg-white p-4 mb-4 rounded-lg shadow"
                >
                    <Card
                        id={record.id}
                        values={record.values}
                        setRecords={setRecords}
                    />
                </View>
            ))}
        </ScrollView>
    );
}
