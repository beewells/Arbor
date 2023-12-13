import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

const Eat = ( {navigation} ) => {
  let [fontsLoaded] = useFonts({
    'Regular': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf'),
    'Original': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf'),
  });

  const navigateToComplete = () => {
    navigation.navigate('Complete');
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
      navigation.navigate('GardenLeft');
    }, 200);
  };

  const images = [
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box10.png'),
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box11.png'),
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
        <Image style = {styles.fruit} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Cherry.png')}/>
        <Image style = {styles.background} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Icons/Heroine.png')}/>
    </View>

    <Image style = {styles.healthBar} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/!NEW/health_1.png')}/>

    <TouchableOpacity activeOpacity={1} onPress={navigateToComplete}>
        <View style = {styles.eatOutline}>
            <View style = {styles.eatBackground}>
                <Text style = {styles.eat}> Eat </Text>
            </View>
        </View>
    </TouchableOpacity>

    {!endOfImages && (
        <TouchableOpacity onPress={handleImageChange} style={styles.cyclingImage}>
        <Image
          style={styles.cyclingImage}
          source={images[currentImageIndex]}
        />
      </TouchableOpacity>
      )}
      
    
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
    marginTop: -20,
    marginBottom: -30,
    alignContent: 'center',
  },
  fruit: {
    height: 55,
    width: 55,
    position: 'relative',
    zIndex: 2,
    top: 270,
    left: 70,
  },
  background: {
    marginTop: 10,
    height: 350,
    width: 350,
    marginLeft: 10,
    position: 'relative',
    zIndex: 1,
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
  cyclingImage: {
    height: 100, 
    width: 300,  
    position: 'absolute',
    zIndex: 20,
    top: 57,
  },
});

export default Eat;



