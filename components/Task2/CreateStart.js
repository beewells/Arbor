import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { Video } from "expo-av";

const CreateStart = ({ route, navigation }) => {
  let [fontsLoaded] = useFonts({
    Regular: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/PixelifySans-Regular.ttf"),
    Original: require("/Users/blainekwells/Desktop/Arbor/assets/fonts/rainyhearts.ttf"),
  });

  const navigateToDescription = () => {
    navigation.navigate("Description", {memoryName: memoryName, selectedMedia: selectedMedia});
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
      navigation.navigate("GardenRight");
    }, 200);
  };

  const [memoryName, setMemoryName] = useState("");

  const maxCharacters = 15;
  const maxLines = 2;

  const handleTextChange = (text) => {
    let lines = text.replace(/(\r\n|\n|\r)/gm, "\n").split("\n");
    if (lines.length > maxLines) {
      return;
    }
    if (
      lines.length === maxLines &&
      lines[lines.length - 1].length > maxCharacters
    ) {
      return;
    }
    setMemoryName(text);
  };

  const handleTextSubmit = () => {
    Keyboard.dismiss();
  };

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const openImagePicker = async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Media picker result: ", result);

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setSelectedMedia(result.assets[0].uri);
      setMediaType(result.assets[0].type);
    }
  };

  const getPermissions = async () => {
    const { status: cameraStatus } =
      await Camera.requestCameraPermissionsAsync();
    const { status: galleryStatus } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus !== "granted" || galleryStatus !== "granted") {
      alert("Sorry, we need these permissions to make this work!");
      return false;
    }
    return true;
  };

  const defaultColor = "#F3CBA3";
  const selectedColor = "black";

  const isNextButtonEnabled = memoryName && selectedMedia;

  const images = [
    require("/Users/blainekwells/Desktop/Arbor/assets/images/Boxes/box25.png"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [endOfImages, setEndOfImages] = useState(false);

  const handleImageChange = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setEndOfImages(true);
    }
  };
  return (
    <ImageBackground
      source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Backgrounds/LongBackpack.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={1} onPress={handleExitPress}>
          <Image style={styles.exitButton} source={exitButtonImage} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}> Memory </Text>

      <View style={styles.scroll}>
        <Text style={styles.descriptor}> Memory Name </Text>
        <View style={styles.textOutline}>
          <TouchableOpacity style={styles.textBackground} activeOpacity={1}>
            <TextInput
              style={styles.words}
              onChangeText={handleTextChange}
              value={memoryName}
              multiline={true}
              placeholder="Enter Name"
              returnKeyType="default"
              blurOnSubmit={true}
              onSubmitEditing={handleTextSubmit}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptor}> Media </Text>
        <View style={styles.outline}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={openImagePicker}
            style={[
              styles.background,
              { backgroundColor: selectedMedia ? selectedColor : defaultColor },
            ]}
          >
            {selectedMedia ? (
              mediaType === "video" ? (
                <Video
                  source={{ uri: selectedMedia }}
                  style={styles.videoPreview}
                  useNativeControls
                  resizeMode="contain"
                  shouldPlay={true}
                  isLooping={true}
                />
              ) : (
                <Image style={styles.picture} source={{ uri: selectedMedia }} />
              )
            ) : (
              <Text style={styles.selectMedia}>Select Media</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={navigateToDescription}
        disabled={!isNextButtonEnabled}
      >
        <View
          style={[
            styles.nextOutline,
            { opacity: isNextButtonEnabled ? 1 : 0.5 },
          ]}
        >
          <View style={styles.nextBackground}>
            <Text style={styles.next}> Next </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.method}>
        <Text style={styles.inputText}> Input Method </Text>
        <Image
          style={styles.input}
          source={require("/Users/blainekwells/Desktop/Arbor/assets/images/Icons/InputMethods.png")}
        />
      </View>

      {!endOfImages && (
        <TouchableOpacity
          onPress={handleImageChange}
          style={styles.cyclingImage}
        >
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
    color: "white",
    fontFamily: "Regular",
    fontSize: 40,
    marginBottom: 20,
  },
  picture: {
    width: 242,
    height: 240,
    marginLeft: 4,
    borderWidth: 2.0,
    zIndex: 1,
  },
  videoPreview: {
    width: 242,
    height: 240,
    marginLeft: 4,
    borderWidth: 2.0,
    zIndex: 1,
  },
  background: {
    marginTop: -8,
    borderColor: "black",
    borderWidth: 4.5,
    height: 250,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    paddingRight: 5,
  },
  outline: {
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 246,
    width: 245,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#F3CBA3",
  },
  descriptor: {
    fontFamily: "Regular",
    fontSize: 25,
    textAlign: "flex-start",
    paddingRight: 5,
    marginBottom: 10,
    color: "white",
  },
  textOutline: {
    borderBottomWidth: 4.5,
    borderLeftWidth: 4.5,
    borderBottomColor: "#8d3a37",
    borderLeftColor: "#8d3a37",
    height: 80,
    width: 245,
    zIndex: 2,
    marginRight: 10,
    marginBottom: 30,
  },
  textBackground: {
    marginTop: -8,
    backgroundColor: "#F3CBA3",
    borderColor: "black",
    borderWidth: 4.5,
    height: 85,
    width: 250,
    zIndex: 1,
    paddingRight: 5,
    textAlign: "center",
  },
  words: {
    fontFamily: "Original",
    fontSize: 22,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  scroll: {
    height: 550,
  },
  nextBackground: {
    marginTop: -5,
    backgroundColor: "#F3CBA3",
    borderColor: "black",
    borderWidth: 4.5,
    height: 50,
    width: 110,
    zIndex: 1,
    paddingRight: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  nextOutline: {
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
    fontFamily: "Regular",
    fontSize: 30,
    alignContent: "center",
    justifyContent: "center",
  },
  selectMedia: {
    color: "brown",
    fontSize: 20,
    fontFamily: "Original",
  },
  inputText: {
    marginBottom: 5,
    color: "white",
    fontFamily: "Original",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    alignContent: "center",
    height: 50,
    width: 220,
  },
  method: {
    flexDirection: "column",
  },
  cyclingImage: {
    height: 100,
    width: 300,
    position: "absolute",
    zIndex: 20,
    top: 150,
  },
});

export default CreateStart;
