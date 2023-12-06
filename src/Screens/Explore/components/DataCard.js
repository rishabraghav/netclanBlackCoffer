import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


function convertToInitials(name) {

    const words = name.split(" ");


    const initials = words.map(word => word.charAt(0)).join("");

    return initials.toUpperCase();
}

const DataCard = ({data}) => {
    return (
        <View style={{paddingBottom: 150}}>
            <FlatList data={data} renderItem={({ item }) => (
                <View style={styles.card}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                        <View style={styles.dp}>
                            <Text style={styles.dpText}>{convertToInitials(item.name)}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={{color: "#176B87"}}>{item.name}</Text>
                            <Text>{item.location} | {item.occupation}</Text>
                            <Text>{item.distance}</Text>
                        </View>
                        <TouchableOpacity style={styles.inviteButton}>
                            <Text style={styles.inviteButtonText}>+ INVITE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={{color: "#176B87", fontWeight: 600}}>{item.title}</Text>
                        <Text>Hi community! I am open to new connections"😊"</Text>
                        <Text>{item.description}</Text>
                    </View>
                </View>

            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset:
        {
            width: 1,
            height: 1
        },
        elevation: 5,
        marginHorizontal: 40,
        marginVertical: 10
    },
    dp: {
        height: 70,
        width: 70,
        backgroundColor: "#C2D9FF",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        left: -16,
        marginTop: 10
    },

    dpText: { fontSize: 25, fontWeight: "600", color: "#176B87" },
    inviteButton: {right: 0, position: "absolute"},
    inviteButtonText: { margin: 10, color: "#176B87", fontWeight: "600" },

    nameContainer: {
        marginTop: 20
    },
    descriptionContainer: {
        margin: 10
    }
})

export default DataCard;