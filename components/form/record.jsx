import { useEffect, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { getFields, insertRecord } from "../../scripts/app.js";
import Field from "./field.jsx";

export default function AddRecord({ id, reload }) {
    const [fields, setFields] = useState([]);
    const [values, setValues] = useState([]);

    const createRecord = async () => {
        //TODO do valiation
        try {
            await insertRecord(id, {
                values: fields.reduce((acc, field) => {
                    const payload = field;
                    payload["value"] = values[field.order_index - 1];
                    acc[field.id] = field;
                    return acc;
                }, {}),
            });
            setValues((v) => v.map(() => ""));
            Alert.alert("Record created successfully!");
        } catch (error) {
            console.error("Error creating record:", error);
            Alert.alert(
                "There was an error creating the record. Please try again."
            );
        }
    };

    useEffect(() => {
        async function fetchData() {
            const fields = await getFields(id);
            setFields(fields);
            setValues(fields.map(() => ""));
        }

        try {
            fetchData();
        } catch (error) {
            console.error("Error fetching fields:", error);
            Alert.alert(
                "There was an error fetching the fields. Please try again."
            );
        }
    }, [reload]);

    return (
        <View className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-y-4">
            <Text className=" py-2 text-center text-xl font-bold rounded-t-xl">
                Add records
            </Text>
            {fields.map((field) => (
                <Field
                    key={field.order_index}
                    {...field}
                    setValues={setValues}
                    values={values}
                />
            ))}
            <Pressable
                className="bg-violet-500 rounded-md p-3 mt-4 active:opacity-70"
                onPress={() => {
                    createRecord();
                }}
            >
                <Text className="text-white text-center font-semibold">
                    Submit
                </Text>
            </Pressable>
        </View>
    );
}
