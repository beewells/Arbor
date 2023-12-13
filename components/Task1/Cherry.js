import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Cherry = ( {navigation} ) => {
  let [fontsLoaded] = useFonts({
    'Regular': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf'),
    'Original': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf'),
  });

  const navigateToFullMemory = () => {
    navigation.navigate('FullMemory');
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

  return (
  
      <ImageBackground
        source={require('/Users/blainekwells/Desktop/Arbor/assets/images/Backgrounds/LongBackpack.png')}
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

    
      <TouchableOpacity style = {styles.content} activeOpacity = {1} onPress={navigateToFullMemory}>
        <Text style = {styles.fruitTitle}> Cherries </Text>

        <View style = {styles.fruitInterior}>
            <View style = {styles.fruitBackground}>
                <Image style = {styles.fruit} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Cherry.png')} />
            </View>
        </View>

        <View style = {styles.textBox}>
            <Text style = {styles.memoryText}> You have a</Text>
            <Text style = {styles.memoryText}> memory!</Text>
        </View>
        <Text style = {styles.tap}> Tap to Continue</Text>
      </TouchableOpacity>

      
        
      </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 30,
  },
  exitButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  content: {
    marginTop: 20,
    height: 700,
    width: "100%",
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  fruitTitle: {
    paddingTop: 30,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 52,
    fontFamily: 'Regular', 
    color: 'white',
    paddingRight: 3,
  },
  fruit: {
    height: 160,
    width: 160,
  },
  fruitBackground: {
    marginTop: -8,
    backgroundColor: '#F3CBA3',
    borderColor: 'black',
    borderWidth: 4.5,
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    paddingRight: 5,
  },
  fruitInterior:{
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 247,
    width: 245,
    zIndex: 2,
    marginRight: 10,
  },
  memoryText: {
    fontFamily: 'Original',
    fontSize: 40,
    color: 'white',
  },
  textBox: {
    paddingRight: 15,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tap: {
    marginTop: 30,
    color: 'brown',
    fontSize: 20,
    fontFamily: 'Original',
    color: "#423731",
  }
});

export default Cherry;
