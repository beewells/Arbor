import React, { useState } from "react";
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

const MailFinal= ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Bold: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Bold.ttf"),
    Medium: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Medium.ttf"),
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Semi: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-SemiBold.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  const navigateToNewMail = () => {
    navigation.navigate('TownFinal');
  };

  const [exitButtonImage, setExitButtonImage] = useState(require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/Cancel.png"));

  const exitButtonImages = [
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/Cancel.png"),
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/CancelPressed.png"),
  ];

  const handleExitPress = () => {
    // Switch to the next image in the array
    setExitButtonImage(prevImage => {
      const nextIndex = (exitButtonImages.indexOf(prevImage) + 1) % exitButtonImages.length;
      return exitButtonImages[nextIndex];
    });

    // Navigate to the new page after a brief delay
    setTimeout(() => {
      navigation.navigate('Town');
    }, 200);
  };

  return (
    <ImageBackground style={styles.container} resizeMode="cover">
        <View style={styles.headerContainer}>
          <TouchableOpacity activeOpacity={1} onPress={handleExitPress}>
            <Image
              style={styles.exitButton}
              source={exitButtonImage}
            />
          </TouchableOpacity>
        </View>

        <View style = {styles.contentContainer}>
            <Text style = {styles.heading}> Fruit Sent!</Text>
            <Image style = {styles.flyingEnvelope} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Envelope.gif')}/>
            <TouchableOpacity activeOpacity={1} onPress={navigateToNewMail}>
                <View style = {styles.outline}>
                  <View style = {styles.interior}>
                    <Text style = {styles.doneText}> Done </Text>
                  </View>
                </View>
              </TouchableOpacity>
        </View>


    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F5CBA1",
    },
    headerContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 10,
    },
    heading: {
        paddingTop: 80,
        fontFamily: "Semi",
        fontSize: 50,
        textAlign: 'center',
    },
    exitButton: {
    height: 40,
    width: 40,
    marginTop: 30,
    marginLeft: 15,

    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    flyingEnvelope: {
        marginTop: 40,
        height: 200, 
        width: 350,
        alignContent: 'center',
    },
    outline: {
        marginTop: 45,
        marginLeft: 105,
        borderLeftColor: "#C77A59",
        borderLeftWidth: 7,
        borderBottomColor: "#C77A59",
        borderBottomWidth: 7,
        height: 60,
        width: 130,
        textAlign: 'center',
        alignContent: 'center',
      },
      interior: {
        borderWidth: 3.5,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 130,
        bottom: 5,
      },
      doneText: {
        fontFamily: 'Regular',
        fontSize: 30, 
        textAlign: 'center',
        justifyContent: 'center',
        paddingRight: 5,
      },
});

export default MailFinal;
