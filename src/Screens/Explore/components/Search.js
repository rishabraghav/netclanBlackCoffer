import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../../../constants/icons";

const Search = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image source={icons.SearchIcon} style={{height: 16, width: 16, marginHorizontal: 10}} />
                <TextInput placeholder="Search" />
            </View>
            <TouchableOpacity style={styles.filterButton}>
                <Image source={icons.FilterButtonIcon} />
            </TouchableOpacity>
        </View>
     );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 30,
        marginVertical: 15,
    },
    searchContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 20,
        width: "90%",
        height: 30,
        alignItems: "center",
        paddingHorizontal: 5,
    },
    filterButton: {
        marginHorizontal: 10
    }

})
 
export default Search;