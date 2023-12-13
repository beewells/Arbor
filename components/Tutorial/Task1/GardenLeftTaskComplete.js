import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const GardenLeftTaskComplete = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  navigateToCherry = () => {
    navigation.navigate("Cherry");
  };


  navigateToTown = () => {
    navigation.navigate("Town");
  };

  const images = [
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box13.png'),
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box14.png'),
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box15.png'),
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box16.png'),
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
      source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Backgrounds/GrassBackground.png")}
      resizeMode="cover"
    >
      <Image
        style={styles.path}
        source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/Left.png")}
      />
      <Image
        style={styles.plantA}
        source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Bush.gif")}
      />
      <Image
        style={styles.plantB}
        source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/TallTree.gif")}
      />
      <Image
        style={styles.plantC}
        source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png")}
      />
      <Image
        style={styles.plantD}
        source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/acacia.gif")}
      />
      <Image
        style={styles.plantE}
        source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Bush.gif")}
      />
      
      <Image
          style={styles.fruitTree}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/RoundTree.gif")}
      />
      <Image
          style={styles.plantF}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/FatTree.gif")}
      />
      <Image
          style={styles.plantG}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Log.png")}
      />
      <Image
          style={styles.plantH}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png")}
      />
      <Image
          style={styles.plantI}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/TallTree.gif")}
      />
      <Image
          style={styles.plantJ}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/RoundTree.gif")}
      />
      <Image
          style={styles.plantL}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Bush.gif")}
      />
      <Image
          style={styles.plantK}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Grassets.gif")}
      />
      <Image
          style={styles.plantM}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Trees/Sapling.png")}
      />
      <Image
          style={styles.sign}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/Leftsign.png")}
      />
      <TouchableOpacity style = {styles.right} activeOpacity={1} onPress={navigateToTown} >
        <Image
            style={styles.right}
            source={require("/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Right.gif")}
        />
      </TouchableOpacity>
      <Image
          style={styles.base}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Base.gif")}
      />
      <Image
          style={styles.farmer}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/OldMan.gif")}
      />
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
    alignItems: "center",
    justifyContent: "flex-start",
  },
  top: {
    flexDirection: "row",
    paddingTop: 100,
  },
  path: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  plantA: {
    height: 50,
    width: 50,
    top: 80,
    position: "absolute",
    zIndex: 3,
  },
  plantB: {
    height: 130,
    width: 75,
    top: 80,
    left: 80,
    position: "absolute",
    zIndex: 3,
  },
  plantC: {
    height: 40,
    width: 40,
    top: 230,
    left: 100,
    position: "absolute",
    zIndex: 3,
  },
  plantD: {
    height: 60,
    width: 70,
    top: 300,
    left: 88,
    position: "absolute",
    zIndex: 3,
  },
  plantE: {
    height: 45,
    width: 45,
    top: 395,
    left: 35,
    position: "absolute",
    zIndex: 3,
  },
  notification: {
    height: 70,
    width: 70,
    top: 200,
    left: 45,
    position: "absolute",
    zIndex: 10,
  },
  fruitTree: {
    height: 110,
    width: 95,
    top: 450,
    left: 80,
    position: "absolute",
    zIndex: 2,
  },
  plantF: {
    height: 120,
    width: 100,
    top: 570,
    left: 80,
    position: "absolute",
    zIndex: 1,
  },
  plantG: {
    height: 60,
    width: 60,
    top: 700,
    position: "absolute",
    zIndex: 1,
  },
  plantH: {
    height: 40,
    width: 40,
    top: 640,
    right: 105,
    position: "absolute",
    zIndex: 1,
  },
  plantI: {
    height: 130,
    width: 75,
    top: 425,
    right: 90,
    position: "absolute",
    zIndex: 1,
  },
  plantJ: {
    height: 100,
    width: 90,
    top: 275,
    right:70,
    position: "absolute",
    zIndex: 1,
  },
  plantK: {
    height: 50,
    width: 50,
    top: 580,
    right: 100,
    position: "absolute",
    zIndex: 1,
  },
  plantL: {
    height: 50,
    width: 50,
    top: 580,
    right: 100,
    position: "absolute",
    zIndex: 1,
  },
  plantK: {
    height: 75,
    width: 75,
    top: 190,
    right: 83,
    position: "absolute",
    zIndex: 1,
  },
  plantM: {
    height: 40,
    width: 40,
    top: 140,
    right: 97,
    position: "absolute",
    zIndex: 1,
  },
  sign: {
    height: 50,
    width: 50,
    top: 350,
    right: 5,
    position: "absolute",
    zIndex: 1,
  },
  right: {
    height: 80,
    width: 80,
    top: 190,
    right: -5,
    position: "absolute",
    zIndex: 1,
  },
  base: {
    height: 75,
    width: 75,
    top: 360,
    right: 190,
    position: "absolute",
    zIndex: 1,
  },
  farmer: {
    height: 75,
    width: 75,
    top: 360,
    right: 130,
    position: "absolute",
    zIndex: 1,
  },
  cyclingImage: {
    height: 100, 
    width: 300,  
    position: 'absolute',
    zIndex: 20,
    top: 100,
  },

});

export default GardenLeftTaskComplete;
