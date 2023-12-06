import { SafeAreaView, Text, View } from "react-native";
import styles from "./Explore.styles";
import BottomNavigator from "../BottomNavigator";
import Section from "./components/Section";
import Search from "./components/Search";
import { useState } from "react";
import DataCard from "./components/DataCard";
import Data from "../../constants/Data";


const Explore = () => {
    const [activeTab, setActiveTab] = useState("Personal");

    const data = Data.filter((item) => item.section === activeTab);

    return ( 
    <SafeAreaView style={styles.container}>
        <Section activeTab={activeTab} setActiveTab={setActiveTab} />
        <Search />
        <DataCard data={data} />
        <BottomNavigator />
    </SafeAreaView> 
    );
}
 
export default Explore;