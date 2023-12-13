import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";

const SeedSelection = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  const [selectedPack, setSelectedPack] = useState(null);
  const [dialogueText, setDialogueText] = useState('What would you like?')

  const selectPack = (index) => {
    setSelectedPack(index);
    setDialogueText('Great Choice!')
  };
  const itemImages = [
    require("/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/SeedApple.gif"),
    require("/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/SeedCherry.gif"),
    require("/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/SeedCoconut.gif"),
    require("/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/SeedPeach.gif"),
  ];

  const navigateToCreateStart = () => {
    navigation.navigate("CreateStart");
  };

  const [exitButtonImage, setExitButtonImage] = useState(
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/Cancel.png")
  );

  const exitButtonImages = [
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/Cancel.png"),
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/CancelPressed.png"),
  ];

  const handleExitPress = () => {
    // Switch to the next image in the array
    setExitButtonImage((prevImage) => {
      const nextIndex =
        (exitButtonImages.indexOf(prevImage) + 1) % exitButtonImages.length;
      return exitButtonImages[nextIndex];
    });

    // Navigate to the new page after a brief delay
    setTimeout(() => {
      navigation.navigate("");
    }, 200);
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={1} onPress={handleExitPress}>
          <Image style={styles.exitButton} source={exitButtonImage} />
        </TouchableOpacity>
      </View>
      <Text style = {styles.heading}> Available Seeds</Text>

      <View style={styles.market}>
      <View style={styles.grid}>
          {itemImages.map((image, index) => (
             <TouchableOpacity key={index} onPress={() => selectPack(index)}>
             {selectedPack === index && (
               <Image
                 source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/GreenCircle.png")} // Replace with the correct path to your green circle image
                 style={styles.greenCircle}
               />
             )}
           <View style={styles.fruitOutline}>
             
             <View style={styles.fruitBack}>
               <Image source={image} style={styles.pack} />
             </View>
           </View>
         </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={navigateToCreateStart}
          style={{ opacity: selectedPack !== null ? 1 : 0.5 }} // Change opacity based on selection
        >
          <View style={styles.doneOutline}>
            <View style={styles.doneBackground}>
              <Text style={styles.done}>Plant</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Image style = {styles.appleIcon} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Icons/2.png')}/>
      <Image style = {styles.cherryIcon} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Icons/3.png')}/>
      <Image style = {styles.peachIcon} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Icons/4.png')}/>
      <Image style = {styles.coconutIcon} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Icons/3.png')}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    appleIcon: {
        height: 75,
        width: 75,
        position: 'absolute',
        top: 300,
        left: 10,
    },
    cherryIcon: {
        height: 75,
        width: 75,
        position: 'absolute',
        top: 300,
        right: 135,
    },
    peachIcon: {
        height: 75,
        width: 75,
        position: 'absolute',
        top: 465,
        right: 135,
    },
    coconutIcon: {
        height: 75,
        width: 75,
        position: 'absolute',
        top: 465,
        left: 5,
    },
  container: {
    flex: 1,
    alignItems: "center",
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
    textAlign: 'center'
  },
  exitButton: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  farmer: {
    textAlign: 'center',
    fontFamily: 'original',
    fontSize: '40',
  },
  market: {
    marginTop: -100,
    height: 500,
    width: "90%",
    alignItems: "center",
  },
  dialogue: {
    fontFamily: "Original",
    fontSize: 25,
    margin: 4,
    textAlign: "center",
  },
  dialogueBack: {
    marginTop: -5,
    backgroundColor: "#F3CBA3",
    borderColor: "black",
    borderWidth: 4.5,
    height: 90,
    width: 200,
    zIndex: 1,
    paddingRight: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogueOutline: {
    marginTop: 20,
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 90,
    width: 200,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 15,
  },
  doneBackground: {
    marginTop: -5,
    backgroundColor: "#F3CBA3",
    borderColor: "black",
    borderWidth: 4.5,
    height: 60,
    width: 150,
    zIndex: 1,
    paddingRight: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  doneOutline: {
    marginTop: 300,
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
    fontFamily: "Regular",
    fontSize: 35,
  },
  fruitBack: {
    marginTop: -5,
    backgroundColor: "#F3CBA3",
    borderColor: "black",
    borderWidth: 4.5,
    height: 120,
    width: 120,
    zIndex: 1,
    paddingRight: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  fruitOutline: {
    marginTop: 0,
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 120,
    width: 120,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 0, // Adjust as needed
    position: 'absolute',
  },
  pack: {
    height: 100,
    width: 85,
  },
  greenCircle: {
    position: "absolute",
    left: -15,
    top: 20,
    height: 170,
    width: 150,
  },
});

export default SeedSelection;
