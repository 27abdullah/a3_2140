import { ScrollView, View } from "react-native";
import Card from "./card.jsx";

export default function Cards({ cards }) {
    return (
        <View className="flex-1 bg-gray-100">
            <ScrollView className="flex-1 pt-4">
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            description={card.description}
                            username={card.username}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}
