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

const NewMail = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Bold: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Bold.ttf"),
    Medium: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Medium.ttf"),
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  const navigateToFriends = () => {
    navigation.navigate('Friends')
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
        <Text style={styles.heading}>New Mail</Text>
      </View>

      <ScrollView style = {styles.mailScroll}>
        <View style={styles.viewMailTop}>
          <Image
            style={styles.mailLogo}
            source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Town/Envelope.png")}
          />
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Dante</Text>
            <Text style={styles.date}>December 12th, 2023</Text>
            <Text style={styles.message}>Hey! Remember this day?</Text>
          </View>
        </View>

        <View style={styles.viewMail}>
          <Image
            style={styles.mailLogo}
            source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Town/Envelope.png")}
          />
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Blaine</Text>
            <Text style={styles.date}>February 12th, 2022</Text>
            <Text style={styles.message}>I'm wheezing, look at this!</Text>
          </View>
        </View>
        
        <View style={styles.viewMail}>
          <Image
            style={styles.mailLogo}
            source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Town/Envelope.png")}
          />
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Melody</Text>
            <Text style={styles.date}>December 12th, 2023</Text>
            <Text style={styles.message}>Blubblublubblub </Text>
          </View>
        </View>

        <View style={styles.viewMail}>
          <View style = {styles.overlappingImage}>
          </View>
          <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Paris.jpeg')}/>
          <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Cherry-2.png')}/>
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Hamidou</Text>
            <Text style={styles.date}>June 12th, 2023</Text>
            <Text style={styles.message}>I smell colors...</Text>
          </View>
        </View>

        <View style={styles.viewMail}>
          <View style = {styles.overlappingImage}>
          </View>
          <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Korea.webp')}/>
          <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Coconut-2.png')}/>
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Grace</Text>
            <Text style={styles.date}>December 9th, 2023</Text>
            <Text style={styles.message}>Elite TA Energy</Text>
          </View>
        </View>

        <View style={styles.viewMail}>
          <View style = {styles.overlappingImage}>
          </View>
          <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Bakery.jpeg')}/>
          <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Peach-2.png.png')}/>
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Taylor</Text>
            <Text style={styles.date}>February 17th, 2023</Text>
            <Text style={styles.message}>All cake, no bakery!</Text>
          </View>
        </View>

        <View style={styles.viewMail}>
          <View style = {styles.overlappingImage}>
          </View>
          <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/Lightstick.jpeg')}/>
          <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Cherry-2.png')}/>
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Melody</Text>
            <Text style={styles.date}>August 24th, 2023</Text>
            <Text style={styles.message}>Concert Day!</Text>
          </View>
        </View>

        <View style={styles.viewMail}>
          <View style = {styles.overlappingImage}>
          </View>
          <Image style = {styles.bigImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Stock/SanFran.jpeg')}/>
          <Image style = {styles.smallImage} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Fruits/Apple-2.png.png')}/>
          <View style={styles.viewMailText}>
            <Text style={styles.sendName}>From: Shannon</Text>
            <Text style={styles.date}>May 29th, 2023</Text>
            <Text style={styles.message}>Golden Hour at Alcatraz</Text>
          </View>
        </View>

        <Text style = {styles.end}> Refresh </Text>
      </ScrollView>

      <View style = {styles.outline}>
        <TouchableOpacity
            style={styles.sendButton}
            onPress={navigateToFriends}
            activeOpacity={1}
          >
            <Text style={styles.buttonText}>
              Send Mail
            </Text>
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

  mailScroll: {
    borderBottomWidth: 3, // Adjust the border width as needed
    borderBottomColor: 'black', 
    width: "110%",
    marginRight: 30,
  },

  // view mail boxes
  viewMailTop: {
    paddingLeft: 75,
    paddingTop: 10,
    borderBottomWidth: 2,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 15,
    paddingBottom: 20,
  },
  viewMail: {
    paddingLeft: 75,
    paddingTop: 10,
    borderBottomWidth: 2,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  mailLogo: {
    height: 60,
    width: 85,
  },
  end: {
    paddingTop: 10,
    fontFamily: 'Semi',
    fontSize: 20,
    textAlign: 'center',
  },

  //text alignment
  viewMailText: {
    flexDirection: "column",
    alignContent: "center",
    marginLeft: 40,
  },

  sendName: {
    fontSize: 20,
    fontFamily: "Original",
    color: "black",
  },
  date: {
    fontSize: 12.5,
    fontFamily: "Original",
    color: "black",
  },
  message: {
    fontSize: 12.5,
    fontFamily: "Original",
    color: "#8E5446",
  },

  // friends with images
  overlappingImage: {
    position: 'relative',
    marginRight: 86,
    
  },
  bigImage: {
    marginTop: 10,
    marginLeft: 80,
    borderWidth: 1.5,
    borderColor: 'black',
    height: 60,
    width: 60,
    zIndex: 1,
    position: 'absolute',
    top: 1,
  },
  smallImage: {
    borderWidth: 1.5,
    borderColor: 'black',
    height: 30,
    width: 30,
    zIndex: 2,
    position: 'absolute',
    bottom: 5,
    justifyContent: 'flex-start',
    marginLeft: 125,
    backgroundColor: "#FDF0D5",
    marginBottom: 5,
  },

  outline: {
    borderLeftColor: "#C77A59",
    borderLeftWidth: 4,
    borderBottomColor: "#C77A59",
    borderBottomWidth: 7,
    height: 50,
    width: 170,
    marginTop: 20,
    marginBottom: 25,
  },
  sendButton: {
    borderWidth: 3.5,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 170,
    marginBottom: 20,
    paddingRight: -20,
    bottom: 5,
  },

  buttonText: {
    fontFamily: 'Original',
    fontSize: 25, 
  }
});

export default NewMail;

