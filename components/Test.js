import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View, 
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const Test = () => {
    return (
      <View style={styles.container}>
        <Image 
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/!NEW/AlertLeft.gif")} 
          style={styles.image} 
        />
        <Image 
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Bush.gif")} 
          style={styles.topShurb} 
        />
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200, // Adjust the width as needed
      height: 200, // Adjust the height as needed
      //resizeMode: "contain",
    },
  });
  

export default Test;
