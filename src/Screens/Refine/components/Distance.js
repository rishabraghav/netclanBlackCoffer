import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from 'react-native-slider';

const Distance = () => {
    const [distance, setDistance] = useState(50);
    return (
        <View style={{ marginVertical: 15 }}>
            <Text style={styles.heading}>Select Hyperlocal Distance</Text>
            <Slider
                value={distance}
                minimumValue={0}
                maximumValue={100}
                step={1}
                onValueChange={(value) => setDistance(value)}
                minimumTrackTintColor="#176B87"
                maximumTrackTintColor="#b3b3b3"
                thumbStyle={styles.thumbStyle}
                trackStyle={styles.trackStyle}
            />
            <Text>{distance} km</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    heading: {
        fontWeight: "500",
        fontSize: 15,
        color: "#213555",
    },
    thumbStyle: {
        width: 20,
        height: 20,
        backgroundColor: '#176B87',
        borderRadius: 10,
      },
      trackStyle: {
        height: 4,
        borderRadius: 2,
      },
})

export default Distance;