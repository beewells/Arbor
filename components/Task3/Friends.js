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

const Friends = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    "Regular": require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Bold.ttf"),
    "Original": require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  const navigateToMemories = () => {
    navigation.navigate('Memories');
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
            <Text style={styles.heading}>Friends</Text>
        </View>

            <ScrollView style = {styles.friendsScroll}>
            <View style = {styles.sendTo}>
                <View style = {styles.profile}>
                    <Image 
                        style = {styles.profileSize}
                        source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Profile1.gif')}
                    />

                    <Text style = {styles.profileName}> Blaine </Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress = {navigateToMemories}>
                  <View style = {styles.smallOutline}>
                      <View style = {styles.smallInterior}>
                          <View style = {styles.sendSeed}>
                              <Text style = {styles.buttonText}> Send Seed</Text>
                              <Image 
                                  style = {styles.sapling}
                                  source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png')}
                              />
                          </View>
                      </View>
                  </View> 
                </TouchableOpacity>
                
            </View>
            
            <View style = {styles.sendTo}>
                <View style = {styles.profile}>
                
                    <Image 
                        style = {styles.profileSize}
                        source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Profile2.gif')}
                    />
                    <Text style = {styles.profileName}> Dante </Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress = {navigateToMemories}>
                  <View style = {styles.smallOutline}>
                      <View style = {styles.smallInterior}>
                          <View style = {styles.sendSeed}>
                              <Text style = {styles.buttonText}> Send Seed</Text>
                              <Image 
                                  style = {styles.sapling}
                                  source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png')}
                              />
                          </View>
                      </View>
                  </View> 
                </TouchableOpacity>
            </View>

            <View style = {styles.sendTo}>
                <View style = {styles.profile}>
                
                    <Image 
                        style = {styles.profileSize}
                        source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Profile3.gif')}
                    />

                    <Text style = {styles.profileName}> Melody </Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress = {navigateToMemories}>
                  <View style = {styles.smallOutline}>
                      <View style = {styles.smallInterior}>
                          <View style = {styles.sendSeed}>
                              <Text style = {styles.buttonText}> Send Seed</Text>
                              <Image 
                                  style = {styles.sapling}
                                  source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png')}
                              />
                          </View>
                      </View>
                  </View> 
                </TouchableOpacity>
            </View>

            <View style = {styles.sendTo}>
                <View style = {styles.profile}>
                    
                    <Image 
                        style = {styles.profileSize}
                        source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/ProfileHam.gif')}
                    />
                     <Text style = {styles.profileName}> Hamidou </Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress = {navigateToMemories}>
                  <View style = {styles.smallOutline}>
                      <View style = {styles.smallInterior}>
                          <View style = {styles.sendSeed}>
                              <Text style = {styles.buttonText}> Send Seed</Text>
                              <Image 
                                  style = {styles.sapling}
                                  source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png')}
                              />
                          </View>
                      </View>
                  </View> 
                </TouchableOpacity>
            </View>

            <View style = {styles.sendTo}>
                <View style = {styles.profile}>
                    
                    <Image 
                        style = {styles.profileSize}
                        source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Profile1.gif')}
                    />
                     <Text style = {styles.profileName}> Grace </Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress = {navigateToMemories}>
                  <View style = {styles.smallOutline}>
                      <View style = {styles.smallInterior}>
                          <View style = {styles.sendSeed}>
                              <Text style = {styles.buttonText}> Send Seed</Text>
                              <Image 
                                  style = {styles.sapling}
                                  source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png')}
                              />
                          </View>
                      </View>
                  </View> 
                </TouchableOpacity>
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
    fontSize: 60,
    paddingTop: 20,
    paddingLeft: 30,
  },
  exitButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },

  to: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    borderBottomWidth: 2.5,
    width: "100%",
  },
  toText: {
    fontFamily: "Original",
    fontSize: 30,
    textAlign: 'center',
  },
  friendsScroll: {
    width: "100%",
    flex: 1,
  },
  sendTo: {
    //height: 250,
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
  },
  // profilePictures
  profile: {
    flexDirection: "row",
    alignItems: "center",

  },
  profileSize: {
    height: 90,
    width: 90,
    marginTop: 10,
    marginRight: 20,
  },
  profileName: {
    fontFamily: "Regular",
    fontSize: 25,
  },
  smallOutline: {
    borderLeftColor: "#C77A59",
    borderLeftWidth: 4,
    borderBottomColor: "#C77A59",
    borderBottomWidth: 7,
    height: 60,
    width: 110,
    marginTop: 35,
    marginBottom: 25,
  },
  smallInterior: {
    borderWidth: 3.5,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 110,
    //marginBottom: 20,
    //paddingRight: -20,
    bottom: 5,
  },
  sendSeed: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: "Regular",
    marginTop: 8,
    fontSize: 17, 
  },
  sapling: {
    width: 30,
    height: 30,
    alignItems: 'center',
    bottom: 10,
  },

  end: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Regular',
  },
  footer: {
    height: 70,
    borderTopColor: 'black',
    borderTopWidth: 2.5,
    width: '100%',
  },
});

export default Friends;
