import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home/Home";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import icons from "../constants/icons";
import { useNavigation } from "@react-navigation/native";
import Refine from "./Refine/Refine";

const Stack = createStackNavigator();

const Navigation = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Refine');
    }

    const headerOptions = {
        headerStyle: {
            backgroundColor: "#176B87",
        },
        headerTitleStyle: {
            fontWeight: "400",
            color: "white",
            alignSelf: "flex-start"
        },
        headerTitleContainerStyle: {
            height: 50,
        },
        headerLeft: () => (
            <TouchableOpacity style={styles.leftContainer}>
                <Image source={icons.MenuIcon} style={{ height: 24, width: 24 }} resizeMode='contain' />
            </TouchableOpacity>
        ),
        headerTitle: () => (
            <View style={{ marginLeft: 0, alignItems: "flex-start" }}>
                <Text style={[styles.text, styles.title]}>Howdy Rishabh Raghav!!</Text>
                <View style={styles.locationContainer}>
                    <Image style={{ height: 15, width: 15 }} source={icons.LocationIcon} resizeMode='contain' />
                    <Text style={[styles.text, { margin: 2 }]}>Noida</Text>
                </View>
            </View>
        ),
        headerRight: () => (
            <TouchableOpacity style={styles.rightContainer} onPress={handlePress}>
                <Image source={icons.RefineIcon} style={{ height: 25, width: 25 }} />
                <Text style={styles.text}>Refine</Text>
            </TouchableOpacity>
        ),
        headerTitleAlign: "left",
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={headerOptions} />
            <Stack.Screen name='Refine' component={Refine} options={{
                title: "",
                headerStyle: {
                    backgroundColor: "#176B87",
                },
                headerTitleStyle: {
                    color: "white",
                },
                headerTintColor: "white",
                headerBackTitle: "Refine",
            }} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    leftContainer: {
        marginLeft: 16,
    },
    rightContainer: {
        marginRight: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "600",
        color: "white",
    },
    text: {
        color: 'white',
    },
    locationContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});

export default Navigation;