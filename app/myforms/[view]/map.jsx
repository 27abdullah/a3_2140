import { useFocusEffect, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Card from "../../../components/record/card.jsx";
import { getRecords } from "../../../scripts/app";

const { width } = Dimensions.get("window");

export default function Map() {
    const [loading, setLoading] = useState(true);
    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const { view } = useGlobalSearchParams();

    // Fetch map data when focused
    useFocusEffect(
        useCallback(() => {
            async function fetchData() {
                const data = await getRecords(view);
                setRecords(
                    data.filter((record) => {
                        const val = Object.values(record.values);
                        return val.some(
                            (field) =>
                                field.field_type === "location" &&
                                field.value.length === 2
                        );
                    })
                );
                setLoading(false);
            }

            fetchData();
        }, [view])
    );

    // Pick a default location
    const getDefaultLocation = () => {
        if (records.length > 0) {
            const locationField = Object.values(records[0].values).find(
                (field) => field.field_type === "location"
            );
            if (locationField && locationField.value.length === 2) {
                const [latitude, longitude] = locationField.value;
                return {
                    latitude,
                    longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                };
            }
        }

        // Default brissy
        return {
            latitude: -27.4975,
            longitude: 153.0137,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        };
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50 p-4">
                <Text className="text-center text-gray-600 text-lg">
                    Loading map...
                </Text>
            </View>
        );
    }

    if (records.length === 0) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50 p-12">
                <View className="bg-white p-6 rounded-lg shadow text-center">
                    <View className="mb-4">
                        <Text className="text-lg font-semibold mb-2">
                            No Location Data
                        </Text>
                        <Text className="text-gray-600">
                            There are no records with location data available
                            for this form.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View className="flex-1">
            <MapView
                style={styles.map}
                initialRegion={getDefaultLocation()}
                onPress={() => setSelectedRecord(null)}
            >
                {records.map((record) => {
                    const locationField = Object.values(record.values).find(
                        (field) => field.field_type === "location"
                    );
                    if (!locationField || locationField.value.length !== 2) {
                        return null;
                    }

                    const [latitude, longitude] = locationField.value;

                    return (
                        <Marker
                            key={record.id}
                            coordinate={{ latitude, longitude }}
                            onPress={(e) => {
                                e.stopPropagation();
                                setSelectedRecord(record);
                            }}
                        />
                    );
                })}
            </MapView>

            {selectedRecord && (
                <View className="absolute bottom-10 left-5 right-5 z-50 self-center w-40">
                    <Card
                        id={selectedRecord.id}
                        values={selectedRecord.values}
                        setRecords={setRecords}
                        map={true}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
});
