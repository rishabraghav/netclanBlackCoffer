import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const data = [
    "Coffee",
    "Business",
    "Hobbies",
    "Friendship",
    "Movies",
    "Dining",
    "Dating",
    "Matrimony",
]

const Purpose = () => {

    const [selectedButton, setSelectedButton] = useState([
        "Coffee",
        "Business",
        "Friendship"
    ]);

    const handlePress = (item) => {
        setSelectedButton((prevSelectedButtons) => {
            if (prevSelectedButtons.includes(item)) {
                return prevSelectedButtons.filter((element) => element !== item);
            } else {
                return [...prevSelectedButtons, item];
            }
        });
    }
    return (
        <View style={{ marginVertical: 15 }}>
            <Text style={styles.heading}>Select Purpose</Text>
            <FlatList style={{ marginTop: 10 }} data={data} renderItem={({ item }) => (
                <TouchableOpacity style={[
                    styles.button,
                    {
                        backgroundColor: selectedButton.includes(item) ? "#176B87" : "white",
                        borderColor: selectedButton.includes(item) ? "#176B87" : "black"
                    }
                ]} onPress={() => handlePress(item)}>
                    <Text style={{ color: selectedButton.includes(item) ? "white" : "black" }}>{item}</Text>
                </TouchableOpacity>
            )} numColumns="3" scrollEnabled={false} />
        </View>
    );
}


const styles = StyleSheet.create({
    heading: {
        fontWeight: "500",
        fontSize: 15,
        color: "#213555",
    },
    button: {
        backgroundColor: "#176B87",
        borderColor: "#176B87",
        borderWidth: 0.5,
        margin: 10,
        padding: 8,
        width: 90,
        borderRadius: 20
    }
})
export default Purpose;