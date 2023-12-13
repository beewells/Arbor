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

const Market = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });
  const navigationRoutes = [
    'AppleAcquired',
    'CherryAcquired',
    'CoconutAcquired',
    'PeachAcquired',
  ];

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
      navigation.navigate("Town");
    }, 200);
  };

  const navigateToSelectedPackscreen = () => {
    if(selectedPack !== null){
      const routeName = navigationRoutes[selectedPack];
      navigation.navigate(routeName);
    } else {
      alert('Please select a seed packet.');
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Backgrounds/Stand.png")}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={1} onPress={handleExitPress}>
          <Image style={styles.exitButton} source={exitButtonImage} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.farmer}
        source={require("/Users/blainekwells/Desktop/Arbor/assets/images/!NEW/FarmerTopHalf.gif")}
      />

      <View style={styles.market}>
        <View style={styles.dialogueOutline}>
          <View style={styles.dialogueBack}>
            <Text style={styles.dialogue}> {dialogueText} </Text>
          </View>
        </View>

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
          onPress={navigateToSelectedPackscreen}
          style={{ opacity: selectedPack !== null ? 1 : 0.5 }} // Change opacity based on selection
        >
          <View style={styles.doneOutline}>
            <View style={styles.doneBackground}>
              <Text style={styles.done}>Done</Text>
            </View>
          </View>
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
  farmer: {
    height: 300,
    width: 300,
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
    marginTop: 0,
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
    marginBottom: 25,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 0, // Adjust as needed
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

export default Market;
