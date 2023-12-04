import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import icons from "../../../constants/icons";
import { useState } from "react";


const data = [
    "Available | Hey Lets Connect",
    "Away | Stay Discreet And Watch",
    "Busy | Do Not Disturb | Will Catch Up Later",
    "SOS | Emergency! Need Assistance! HELP"
]

const Availability = () => {

    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("Available | Hey Lets Connect");

    const toggleDropDown = () => {
        setVisible(!visible)
    }

    const selectAvailability = (item) => {
        setText(item);
        toggleDropDown();
    }
    return (
        <View style={{marginVertical: 15}}>
            <Text style={styles.heading}>
                Select your Availability
            </Text>
            <TouchableOpacity style={styles.input} onPress={toggleDropDown}>
                <Text style={{ fontWeight: "400" }}>{text}</Text>
                <Image source={icons.DownArrowIcon} style={{ height: 12, width: 12 }} resizeMode="contain" />
            </TouchableOpacity>
            {visible && <View style={styles.dropDownContainer}>
                <FlatList style={styles.dropDown} data={data} renderItem={({ item }) => (
                    <TouchableOpacity style={{marginVertical: 5}} onPress={() => selectAvailability(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )} scrollEnabled={false} />
            </View>}

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 6,
        height: 26,
        marginTop: 5,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    heading: {
        fontWeight: "500",
        fontSize: 15,
        color: "#213555",
    },
    dropDown: {
        borderRadius: 5,
        padding: 10,
    },
    dropDownContainer: {
        backgroundColor: "white",
        borderRadius: 5,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset:
        {
            width: 1,
            height: 1
        },
        elevation: 5
    }
})

export default Availability;