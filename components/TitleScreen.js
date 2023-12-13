import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const TitleScreen = ( {navigation} ) => {
  let [fontsLoaded] = useFonts({
    'Regular': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf'),
    'Original': require('/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf'),
  });

  const navigateToTown = () => {
    navigation.navigate('TownTutorial');
  };

  return (
  
      <ImageBackground
        source={require('/Users/blainekwells/Desktop/Arbor/assets/images/Backgrounds/Titlescreen.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <TouchableOpacity activeOpacity={1} onPress={navigateToTown}>
        <View style={styles.start}>
          <Text style={styles.originalFont}>
            -Tap to Start-
          </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  originalFont: {
    fontFamily: 'Regular',
    fontSize: 40,
    color: 'white',
  },  
  start: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
});

export default TitleScreen;
