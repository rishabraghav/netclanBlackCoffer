import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Status = () => {
    const maxLength = 250;
    const [status, setStatus] = useState(`Hi community! | I am open to new connections "😊"`);

    const handleStatus = (text) => {
        // Check if the entered text exceeds the maxLength
        if (text.length <= maxLength) {
            setStatus(text);
        }
    };

    const remainingCharacters = status.length;

    return (
        <View style={{ marginVertical: 15 }}>
            <Text style={styles.heading}>Add Your Status</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Type your status here"
                    onChangeText={handleStatus}
                    value={status}
                    multiline={true}
                    numberOfLines={4}
                    maxLength={maxLength}
                    style={styles.input}
                />
                <Text style={styles.counter}>{remainingCharacters}/{maxLength}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontWeight: "500",
        fontSize: 15,
        color: "#213555",
    },
    inputContainer: {
        marginTop: 5,
    },
    input: {
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 8,
        minHeight: 66,
        paddingHorizontal: 10,
        textAlignVertical: "top",
    },
    counter: {
        alignSelf: "flex-end",
        marginTop: 5,
        color: "gray",
    },
});

export default Status;
