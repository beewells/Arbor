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

const Memories = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    "Regular": require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Bold.ttf"),
    "Original": require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  const navigateToMailFinal = () => {
    navigation.navigate('MailFinal');
  };

  const navigateToMailMemory = () => {  
    navigation.navigate('BeachMemory');
  };

  const navigateToKoreaTrip = () => {
    navigation.navigate('KoreaMemory');
  }

  const navigateToAteez = () => {
    navigation.navigate('AteezMemory');
  }

  const navigateToFrance = () => {
    navigation.navigate('FranceMemory');
  }
  const navigateToSF = () => {
    navigation.navigate('SFMemory');
  }
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
      navigation.navigate('TownMailTutorial');
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
            <Text style={styles.heading}>Memories</Text>
        </View>

        <ScrollView style = {styles.scroll}>
          <View style = {styles.memoryBox}>
              <View style = {styles.overlappingImage}>
                <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Beach.jpeg')}/>
                <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Apple-2.png.png')}/>
              </View>
              <Text style = {styles.boxText}> Beach Day </Text>
              <View style = {styles.stack}>
              <TouchableOpacity activeOpacity={1} onPress={navigateToMailMemory}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> View </Text>
                  </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={navigateToMailFinal}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> Send </Text>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
          </View>

          <View style = {styles.memoryBox}>
              <View style = {styles.overlappingImage}>
                <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Korea.webp')}/>
                <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Peach-2.png.png')}/>
              </View>
              <Text style = {styles.boxText}> Korea Trip </Text>
              <View style = {styles.stack}>
                
                <TouchableOpacity activeOpacity={1} onPress={navigateToKoreaTrip}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> View </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={1} onPress={navigateToMailFinal}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> Send </Text>
                  </View>
                </View>
              </TouchableOpacity>
                

              </View>
          </View>

          <View style = {styles.memoryBox}>
              <View style = {styles.overlappingImage}>
                <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Lightstick.jpeg')}/>
                <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Coconut-2.png')}/>
              </View>
              <Text style = {styles.boxText}> ATEEZ!! </Text>
              <View style = {styles.stack}>
                
              <TouchableOpacity activeOpacity={1} onPress={navigateToAteez}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> View </Text>
                  </View>
                </View>
              </TouchableOpacity>


                <TouchableOpacity activeOpacity={1} onPress={navigateToMailFinal}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> Send </Text>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
          </View>

          <View style = {styles.memoryBox}>
              <View style = {styles.overlappingImage}>
                <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Paris.jpeg')}/>
                <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Cherry-2.png')}/>
              </View>
              <Text style = {styles.boxText}> Oui Oui! </Text>
              <View style = {styles.stack}>
              <TouchableOpacity activeOpacity={1} onPress={navigateToFrance}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> View </Text>
                  </View>
                </View>
              </TouchableOpacity>


                <TouchableOpacity activeOpacity={1} onPress={navigateToMailFinal}>
                  <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> Send </Text>
                  </View>
                </View>
              </TouchableOpacity>
              </View>
          </View>

          <View style = {styles.memoryBox}>
              <View style = {styles.overlappingImage}>
                <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/SanFran.jpeg')}/>
                <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Peach-2.png.png')}/>
              </View>
              <Text style = {styles.boxText}> A Day in SF!! </Text>
              <View style = {styles.stack}>
              <TouchableOpacity activeOpacity={1} onPress={navigateToSF}>
                <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> View </Text>
                  </View>
                </View>
              </TouchableOpacity>


                <TouchableOpacity activeOpacity={1} onPress={navigateToMailFinal}>
                  <View style = {styles.smallOutline}>
                  <View style = {styles.smallInterior}>
                    <Text style = {styles.innerText}> Send </Text>
                  </View>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
          
          <Text style = {styles.end}> Refresh </Text>
        </ScrollView>

        <View style = {styles.footer}></View>

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
    paddingBottom: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 2.5,
  },
  heading: {
    flex: 1,
    alignItems: "center",
    fontFamily: "Regular",
    fontSize: 50,
    paddingTop: 20,
    paddingLeft: 30,
  },
  exitButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
    marginTop: 13,
  },
  scroll: {
    width: "100%",
    flex: 1,
  },
  memoryBox: {
    height: 120,
    paddingLeft: 25, 
    marginTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2.5,
    borderBottomColor: 'black',
    width: "100%",
    paddingRight: 15,
    paddingTop: 10,
  },
  buttonText: {
    fontFamily: 'Regular',
    marginTop: 8,
    fontSize: 28, 
  },
  // overlapping images
  overlappingImage: {
    //position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,


  },
  bigImage: {
    borderWidth: 1.5,
    borderColor: 'black',
    height: 70,
    width: 70,
    zIndex: 1,
    position: 'absolute',
    bottom: -20,
  },
  smallImage: {
    //borderWidth: 1.5,
    borderColor: 'black',
    height: 40,
    width: 40,
    zIndex: 2,
    position: 'absolute',
    left: 10,
    top: 3,
    backgroundColor: "#FDF0D5",
  },

  boxText: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 55,
    paddingBottom: 10,
    fontFamily: "Regular",
    fontSize: 25,
  },
  smallOutline: {
    borderLeftColor: "#C77A59",
    borderLeftWidth: 4,
    borderBottomColor: "#C77A59",
    borderBottomWidth: 7,
    height: 35,
    width: 85,
    //marginTop: 35,
    marginBottom: 15,
  },
  smallInterior: {
    borderWidth: 3.5,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 85,
    bottom: 5,
  },
  stack: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: 20,
    paddingTop: 5,
    
  },
  end: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: "Regular",
  },
  footer: {
    height: 70,
    borderTopColor: 'black',
    borderTopWidth: 2.5,
    width: '100%',
  },
  innerText: {
    fontFamily: "Regular",
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Memories;