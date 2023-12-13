import React, { useContext, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { VisibilityContext } from '../VisibilityContext';

const Complete = ( {navigation} ) => {
  let [fontsLoaded] = useFonts({
    'Regular': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf'),
    'Original': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf'),
  });

  const navigateToGardenLeftTaskComplete = () => {
    navigation.navigate('GardenLeftTaskComplete');
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
      navigation.navigate('GardenLeftTaskComplete');
    }, 200);
  };

  const images = [
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box7.png'),
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box8.png'),
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box9.png'),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [endOfImages, setEndOfImages] = useState(false);

  const handleImageChange = () => {
    if (currentImageIndex < images.length -1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setEndOfImages(true);
    }
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

    <View style = {styles.character}>
        <Image style = {styles.background} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Happy.gif')}/>
    </View>

    <Image style = {styles.healthBar} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/!NEW/health_2.png')}/>

    <TouchableOpacity activeOpacity={1} onPress={navigateToGardenLeftTaskComplete}>
        <View style = {styles.eatOutline}>
            <View style = {styles.eatBackground}>
                <Text style = {styles.eat}> Done </Text>
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
    fontSize: 60,
    paddingTop: 20,
    paddingLeft: 30,
  },
  exitButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  character: {
    marginTop: 35,
    marginBottom: -30,
    alignContent: 'center',
  },
  background: {
    marginTop: 10,
    height: 350,
    width: 350,
    marginLeft: 10,
  },
  healthBar: {
    height: 100,
    width: 200,
  },
  eatBackground: {
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
  eatOutline:{
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
  eat: {
    fontFamily: 'Regular',
    fontSize: 35,
  },
});

export default Complete;



