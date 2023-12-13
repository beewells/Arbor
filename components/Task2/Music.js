import React, { useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native';
import { useFonts } from 'expo-font';


const Music = ( {route, navigation} ) => {
  let [fontsLoaded] = useFonts({
    'Regular': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf'),
    'Original': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf'),
  });

  const emotions = route.params ? route.params.emotions : '';
  const people = route.params ? route.params.people : '';
  const description = route.params ? route.params.description : '';
  const memoryName = route.params ? route.params.memoryName : '';
  const selectedMedia = route.params ? route.params.selectedMedia : '';

  // next screen
  const navigateToReview = () => {
    navigation.navigate('Review', { emotions: emotions, people: people, description: description, memoryName: memoryName, selectedMedia: selectedMedia });
  };

  // previous screen
  const navigateToEmotions = () => {
    navigation.navigate('Emotions');
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
      navigation.navigate('GardenRight');
    }, 200);
  };

  const [showSpotify, setShowSpotify] = useState(false);

  const isNextButtonEnabled = showSpotify; 
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

    <Text style = {styles.title}> Memory </Text>

    <View style = {styles.scroll}>
    <Text style = {styles.descriptor}> Music </Text>
        <View style = {styles.textOutline} activeOpacity={1}>
        <TouchableOpacity 
            style={styles.textBackground}
            activeOpacity={1}
            onPress={() =>  setShowSpotify(true)}
        >
            {!showSpotify ? (
              <Text style={styles.words}>Tap to Embed Music</Text>
            ) : (
              <Image
                source={require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Spotify.png')}
                style={styles.spotify}
              />
            )}
        </TouchableOpacity>
        <Text style = {styles.bottomText}> Embed Url</Text>

        </View>
    </View>
    <View style = {styles.buttons}>
        <TouchableOpacity activeOpacity={1} onPress={navigateToEmotions}>
            <View style = {styles.buttonOutline}>
                <View style = {styles.buttonBackground}>
                    <Text style = {styles.next}> Back </Text>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={navigateToReview} disabled={!isNextButtonEnabled}>
            <View style = {[styles.buttonOutline, {opacity: isNextButtonEnabled ? 1 : 0.5}]}>
                <View style = {styles.buttonBackground}>
                    <Text style = {styles.next}> Next </Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>

    <View style = {styles.method}>
      <Text style = {styles.inputText}> Input Method </Text>
      <Image style = {styles.input} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Icons/InputMethods.png')}/>
    </View>
    
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  spotify: {
    //paddingLeft: 50,
    //height: 55,
    //width: 200,
    //marginLeft: 18,
    //marginRight: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
  descriptor: {
    fontFamily: 'Regular',
    fontSize: 25,
    textAlign: 'flex-start',
    paddingRight: 5,
    marginBottom: 10,
    color: 'white',
  },
  textOutline:{
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
  textBackground: {
    marginTop: -8,
    backgroundColor: '#F3CBA3',
    borderColor: 'black',
    borderWidth: 4.5,
    height: 104,
    width: 250,
    zIndex: 1,
    paddingRight: 5,
    textAlign: 'center',
  },
  words: {
    paddingTop: 25,
    fontFamily: 'Original',
    fontSize: 22,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    alignContent: 'center',
  },
  scroll: {
    paddingTop: 100,
    height: 550,
  },
  bottomText: {
    paddingTop: 15,
    fontFamily: 'Regular',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  buttons: {
    marginTop: -70,
    marginBottom: 70,
    flexDirection: 'row',
  },
  buttonBackground: {
    marginTop: -5,
    backgroundColor: '#F3CBA3',
    borderColor: 'black',
    borderWidth: 4.5,
    height: 50,
    width: 110,
    zIndex: 1,
    paddingRight: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOutline:{
    marginTop: -80,
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 50,
    width: 110,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 30,
  },
  next: {
    paddingLeft: 5,
    fontFamily: 'Regular',
    fontSize: 30,
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputText: {
    marginBottom: 5,
    color: 'white',
    fontFamily: 'Original',
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    alignContent: 'center',
    height: 50,
    width: 220,
  },
  method: {
    flexDirection: 'column',
  },
});

export default Music;

