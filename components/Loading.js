import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

const Loading = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("TitleScreen");
    }, 7000); // 7000 milliseconds = 7 seconds

    return () => clearTimeout(timer); // This will clear the timeout if the component is unmounted before the timer finishes
  }, [navigation]);

  return (
    <ImageBackground style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("TitleScreen")}
        style={styles.loading}
      >
        <Image
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Backgrounds/Loading.gif")}
          style={styles.loadingImage}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#daa480",
  },
  loading: {
    alignItems: "center", 
  },
  loadingImage: {
    height: 300,
    width: 300,
  },
});

export default Loading;
