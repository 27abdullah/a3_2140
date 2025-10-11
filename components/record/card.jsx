import { Alert, Image, Pressable, Text, View } from "react-native";
import { deleteRecord } from "../../scripts/app.js";

export default function Card({ id, values, setRecord, map = false }) {
    const deleteHandler = async () => {
        if (map) return;

        try {
            await deleteRecord(id);
            setRecords((prev) => prev.filter((rec) => rec.id !== id));
        } catch (error) {
            console.error("Error deleting record:", error);
            Alert.alert(
                "There was an error deleting the record. Please try again."
            );
        }
    };

    return (
        <View
            className={
                "bg-white rounded-lg p-4 shadow-sm flex flex-col" +
                (map && " w-40 border")
            }
        >
            <View>
                {Object.entries(values)
                    .sort(([, a], [, b]) => a.order_index - b.order_index)
                    .map(([key, field]) => (
                        <View key={key} className="mb-3 last:mb-0">
                            <Text className="text-xs text-gray-500 font-medium mb-1">
                                {field.name}
                            </Text>
                            {field.field_type === "image" && field.value ? (
                                <Image
                                    source={{ uri: field.value }}
                                    className="w-full h-48 rounded-lg"
                                />
                            ) : (
                                <Text className="text-base text-gray-900">
                                    {field.field_type == "location"
                                        ? `Lat = ${
                                              Math.trunc(
                                                  field.value[0] * 1000
                                              ) / 1000 || "NA"
                                          }\nLon = ${
                                              Math.trunc(
                                                  field.value[1] * 1000
                                              ) / 1000 || "NA"
                                          }`
                                        : field.value || "(empty)"}
                                </Text>
                            )}
                        </View>
                    ))}
            </View>
            {!map && (
                <Pressable
                    onPress={() => deleteHandler()}
                    className="ml-auto bg-red-200 max-w-min rounded-full p-2 mt-2 active:bg-gray-200"
                >
                    <Text className="text-gray-600 font-medium px-2 w-min">
                        ✕
                    </Text>
                </Pressable>
            )}
        </View>
    );
}
