import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Availability from "./components/Availability";
import Status from "./components/Status";
import Distance from "./components/Distance";
import Purpose from "./components/Purpose";


const Refine = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#176B87"}}>
        <ScrollView style={{ padding: 20, backgroundColor: "white",}}>
            <Availability />
            <Status />
            <Distance />
            <Purpose />

            <View style={styles.saveButtonContainer}>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={{ color: "white", fontWeight: 600 }}>Save & Explore</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    saveButtonContainer: {
        width: "100%",
        alignItems: "center",
        marginVertical: 15,
    },
    saveButton: {
        backgroundColor: "#176B87",
        padding: 6,
        paddingHorizontal: 15,
        borderRadius: 20
    },
})

export default Refine;