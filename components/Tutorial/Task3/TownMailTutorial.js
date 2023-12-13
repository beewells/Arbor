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

const Town = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  //const { isNotificationVisible } = useContent(VisibilityContext);
  const navigateToNewMail = () => {
    navigation.navigate('NewMail');
  };

  const navigateToCreateStart = () => {
    navigation.navigate('CreateStart');
  }

  navigateToGardenLeftSolo = () => {
    navigation.navigate('GardenLeftT3');
  }

  navigateToGardenRight = () => {
    navigation.navigate('GardenRightT3');
  }

  navigateToMarket = () => {
    navigation.navigate('Market')
  }
  const images = [
    require('/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box30.png'),

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
    <ImageBackground style={styles.container} source = {require('/Users/blainekwells/Desktop/Arbor/assets/images/Backgrounds/TownBackground.jpg')} resizeMode="cover">
      <Image style = {styles.market} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Market.gif')} />
        <Image style = {styles.house} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/House.gif')} />
      <TouchableOpacity activeOpacity = {1} onPress = {navigateToNewMail}>
        <Image style = {styles.office} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Office.gif')}/>
      </TouchableOpacity>
      <Image style = {styles.store} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Store.gif')}/>
      <Image style = {styles.left} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/Town/ForestLeft.png')}/>
      <Image style = {styles.right} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/Town/ForestRight.png')}/>
      <Image style = {styles.farmer} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/OldMan.gif')}/>
      <Image style = {styles.base} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Base.gif')}/>

      <TouchableOpacity activeOpacity = {1} onPress = {navigateToGardenLeftSolo}>
        <Image style = {styles.gardenLeft} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Left.gif')}/>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity = {1} onPress = {navigateToGardenRight}>
        <Image style = {styles.gardenRight} source ={require('/Users/blainekwells/Desktop/Arbor/assets/images/GIFs/Right.gif')}/>
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
        alignItems: "center",
        justifyContent: "flex-start",
    },
    top: {
      flexDirection: 'row',
      paddingTop: 100,
      position: 'relative',
    
    },
    house: {
      height: 200,
      width: 200,
      position: 'relative',
      right: 100,
      bottom: 160,
    },
    market: {
      height: 220,
      width: 200,
      zIndex: 2,
      position: 'relative',
      left: 105,
      top: 60,
      zIndex: 1,
    },
    office: {
      height: 160,
      width: 160,
      position: 'relative',
      right: 110,
      top: 150,
    },
    store : {
      height: 160,
      width: 160,
      position: 'relative',
      left: 109,
      top: -10,
    },
    farmer: {
      height: 95,
      width: 95,
      zIndex: 2,
      bottom: 520,
      left: 35,
      position: 'relative',
    },
    left: {
        height: 50,
        width: 60,
        position: 'relative',
        bottom: 390,
        right: 165,
    },
    right: {
      height: 50,
      width: 60,
      position: 'relative',
      bottom: 448,
      left: 160,
    },
    base: {
      height: 95,
      width: 95,
      zIndex: 2,
      bottom: 612,
      right: 45,
      position: 'relative',
    },
    gardenLeft: {
      height: 80,
      width: 80,
      zIndex: 2,
      bottom: 645,
      right: 160,
      position: 'relative',
    },
    gardenRight: {
      height: 80,
      width: 80,
      zIndex: 2,
      bottom: 730,
      left: 160,
      position: 'relative',
    },
    notification: {
      height: 90,
      width: 90,
      zIndex: 2,
      bottom: 920,
      right: 156,
      position: 'relative',
    },
    cyclingImage: {
      height: 100, 
      width: 300,  
      position: 'absolute',
      zIndex: 20,
      top: 90,
    },
});

export default Town;
