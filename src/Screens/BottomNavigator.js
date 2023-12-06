import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import icons from '../constants/icons';


const BottomNavigator = () => {
  return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navButton}>
                <Image style={styles.icon} resizeMode='contain' source={icons.ExploreIcon} />
                <Text style={[styles.iconText, {color: "#176B87"}]}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Image style={styles.icon} resizeMode='contain' source={icons.NetworkIcon} />
                <Text style={styles.iconText}>Network</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Image style={styles.icon} resizeMode='contain' source={icons.ChatIcon} />
                <Text style={styles.iconText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Image style={styles.icon} resizeMode='contain' source={icons.ContactsIcon} />
                <Text style={styles.iconText}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Image style={styles.icon} resizeMode='contain' source={icons.GroupsIcon} />
                <Text style={styles.iconText}>Groups</Text>
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        height: 80,
        position: 'absolute',
        bottom: 0,
        left: 0, 
        right: 0,
        paddingTop: 6,
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderTopWidth: 0.5,
        borderColor: "lightgray"
    },
    navButton: {
        marginHorizontal: 10,
        alignItems: "center"
    },
    icon: {
        height: 26,
        width: 26
    },
    iconText: {
        color: "#7D7C7C"
    }
})

export default BottomNavigator;
