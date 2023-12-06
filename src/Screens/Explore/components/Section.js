import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Section = ({ activeTab, setActiveTab }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setActiveTab("Personal") }} style={styles.button(activeTab, "Personal")}>
                <Text style={styles.buttonText}>Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab("Business") }} style={styles.button(activeTab, "Business")}>
                <Text style={styles.buttonText}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setActiveTab("Merchant") }} style={styles.button(activeTab, "Merchant")}>
                <Text style={styles.buttonText}>Merchant</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#088395",
    },
    button: (activeTab, name) => ({
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomWidth: activeTab == name ? 2 : 0,
        borderColor: "white",
    }),
    buttonText: {
        color: "white",
        fontWeight: "600"
    }
})

export default Section;