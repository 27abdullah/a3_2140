import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Card from "../../../components/record/card.jsx";
import { getRecords } from "../../../scripts/app";

export default function Map() {
    const [records, setRecords] = useState([]);
    const { view } = useGlobalSearchParams();

    useEffect(() => {
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
        }

        fetchData();
    }, []);

    return (
        <View>
            {records.map((record, index) => (
                <Card
                    key={index}
                    id={record.id}
                    values={record.values}
                    setRecords={setRecords}
                    map={true}
                />
            ))}
        </View>
    );
}
