import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

const CherryAcquired= ( {navigation} ) => {
  let [fontsLoaded] = useFonts({
    'Regular': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf'),
    'Original': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf'),
  });

  const navigateToTownTutorialPlant = () => {
    navigation.navigate('TownTutorialPlant');
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
      navigation.navigate('TownTutorialPlant');
    }, 200);
  };

  return (
  
    <ImageBackground
        style={styles.container}
        resizeMode="cover"
    >
    <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={1} onPress={handleExitPress}>
            <Image
            style={styles.exitButton}
            source={exitButtonImage}
            />
        </TouchableOpacity>
    </View>
        <Text style = {styles.heading}> Cherry Seed Acquired! </Text>
        <Image style = {styles.fruit} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/SeedCherry.gif')} />
        <Text style = {styles.seedAddition}> ~Added to Seeds ~ </Text>
        <TouchableOpacity activeOpacity={1} onPress={navigateToTownTutorialPlant}>
            <View style = {styles.doneOutline}>
                <View style = {styles.doneBackground}>
                    <Text style = {styles.done}> Done </Text>
                </View>
            </View>
        </TouchableOpacity>



    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
    backgroundColor: "#F5CBA1",
  },
  headerContainer: {
    marginTop: 60,
    paddingLeft: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 10,
  },
  heading: {
    flex: 1,
    alignItems: "center",
    fontFamily: "Regular",
    fontSize: 50,
    paddingTop: 20,
    paddingLeft: 30,
    textAlign: 'center',
  },
  exitButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  accquired: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 30, 
  },
  fruit: {
    height: 300,
    width: 250,
    position: 'absolute',
    top: 300,
  },
  doneBackground: {
    marginTop: -5,
    backgroundColor: '#F3CBA3',
    borderColor: 'black',
    borderWidth: 4.5,
    height: 60,
    width: 150,
    zIndex: 1,
    paddingRight: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneOutline:{
    marginTop: 60,
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 60,
    width: 150,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 30,
  },
  done: {
    fontFamily: 'Regular',
    fontSize: 35,
  },
  seedAddition: {
    fontFamily: 'Regular',
    color: 'brown',
    fontSize: 25,
  },
});

export default CherryAcquired;


