import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';



const Review = ( {route, navigation} ) => {
  const emotions = route.params ? route.params.emotions : 'No information provided.';
  const people = route.params ? route.params.people : 'No information provided.';
  const description = route.params ? route.params.description : 'No information provided.';
  const memoryName = route.params ? route.params.memoryName : 'No information provided.';
  const selectedMedia = route.params ? route.params.selectedMedia : 'No information provided.';

  let [fontsLoaded] = useFonts({
    'Regular': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf'),
    'Original': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf'),
  });

  const navigateToGardenRightTaskComplete = () => {
    navigation.navigate('GardenRightTaskComplete');
  };

  const [exitButtonImage, setExitButtonImage] = useState(require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/back_0.png"));

  const exitButtonImages = [
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/back_0.png"),
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/back_1.png"),
  ];

  const handleExitPress = () => {
    // Switch to the next image in the array
    setExitButtonImage(prevImage => {
      const nextIndex = (exitButtonImages.indexOf(prevImage) + 1) % exitButtonImages.length;
      return exitButtonImages[nextIndex];
    });

    // Navigate to the new page after a brief delay
    setTimeout(() => {
      navigation.navigate('SeedSelection');
    }, 200);
  };

  const images = [
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box13.png'),
  ];

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

    <Text style = {styles.title}> {memoryName} </Text>

    <View style = {styles.scroll}>
    <ScrollView>
        <Text style = {styles.descriptor}> Photo </Text>
        <View style = {styles.outline}>
                <View style = {styles.background}>
                    <Image style = {styles.picture} source = {{uri: selectedMedia}} />
                </View>
        </View>

        <Text style = {styles.descriptor}> Description </Text>
        <View style = {styles.outline}>
                <View style = {styles.textBackground}>
                    <Text style = {styles.words}> 
                        { description }
                    </Text>
                </View>
        </View>

        <Text style = {styles.descriptor}> People </Text>
        <View style = {styles.outline}>
                <View style = {styles.textBackground}>
                    <Text style = {styles.words}> 
                        {people}
                    </Text>
                </View>
        </View>

        <Text style = {styles.descriptor}> Emotions </Text>
        <View style = {styles.outline}>
                <View style = {styles.textBackground}>
                    <Text style = {styles.words}> 
                        {emotions}
                    </Text>
                </View>
        </View>

        <Text style = {styles.descriptor}> Music </Text>
        <View style = {styles.musicOutline}>
                <View style = {styles.musicBackground}>
                    <Image style = {styles.spotify} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Spotify.png')} />
                </View>
        </View>
    </ScrollView>
    </View>
    
    <TouchableOpacity activeOpacity={1} onPress={navigateToGardenRightTaskComplete}>
        <View style = {styles.eatOutline}>
            <View style = {styles.eatBackground}>
                <Text style = {styles.eat}> Plant </Text>
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
  title: {
    marginTop: 10,
    color: 'white',
    fontFamily: 'Regular',
    fontSize: 40,
    marginBottom: 20,
  },
  picture: {
    width: 242,
    height: 240,
    marginLeft: 4,
    borderWidth: 2.0,
  },
  background: {
    marginTop: -8,
    borderColor: 'black',
    borderWidth: 4.5,
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    paddingRight: 5,
  },
  outline:{
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 246,
    width: 245,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 30,
  },
  descriptor: {
    fontFamily: 'Regular',
    fontSize: 32,
    textAlign: 'center',
    paddingRight: 5,
    marginBottom: 10,
    color: 'white',
  },
  textBackground: {
    marginTop: -8,
    backgroundColor: '#F3CBA3',
    borderColor: 'black',
    borderWidth: 4.5,
    height: 250,
    width: 250,
    zIndex: 1,
    paddingRight: 5,
    textAlign: 'center',
  },
  words: {
    fontFamily: 'Original',
    fontSize: 23,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    flexDirection: 'column',
  },
  scroll: {
    height: 550,
  },
  musicBackground: {
    marginTop: -5,
    backgroundColor: '#F3CBA3',
    borderColor: 'black',
    borderWidth: 4.5,
    height: 100,
    width: 250,
    zIndex: 1,
    paddingRight: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  musicOutline:{
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 100,
    width: 245,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 30,
  },
  spotify: {
    paddingLeft: 50,
    height: 55,
    width: 200,
    marginLeft: 18,
    marginRight: 10,
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
    marginTop: 20,
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

export default Review;

