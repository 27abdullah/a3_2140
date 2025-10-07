import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
export default function View() {
    const router = useRouter();
    const onPress = (link) => {
        router.push("/myforms/" + link);
    };
    const id = 1;

    return (
        <>
            <Pressable onPress={() => onPress("add")}>
                <Text>Add</Text>
            </Pressable>
            <Pressable onPress={() => onPress(id + "/form")}>
                <Text>Edit</Text>
            </Pressable>
            <Pressable onPress={() => onPress(id + "/records")}>
                <Text>View</Text>
            </Pressable>
        </>
    );
}
