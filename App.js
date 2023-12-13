import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TitleScreen from './components/TitleScreen';
import Loading from './components/Loading';


import Town from './components/Town';
import GardenLeft from './components/Tutorial/GardenLeft';
import GardenRight from './components/Tutorial/GardenRight';
import GardenRightSolo from './components/Tutorial/GardenRightSolo';
import GardenLeftSolo from './components/Tutorial/GardenLeftSolo';

import Cherry from './components/Task1/Cherry';
import FullMemory from './components/Task1/FullMemory';
import Eat from './components/Task1/Eat';
import Complete from './components/Task1/Complete';


import Market from './components/Task2/Market.js';
import CreateStart from './components/Task2/CreateStart';
import Description from './components/Task2/Description';
import People from './components/Task2/People';
import Emotions from './components/Task2/Emotions';
import Music from './components/Task2/Music';
import Review from './components/Task2/Review';
import SeedSelection from './components/Task2/SeedSelection';
import PeachAcquired from './components/Task2/PeachAcquired';
import AppleAcquired from './components/Task2/AppleAcquired';
import CherryAcquired from './components/Task2/CherryAcquired';
import CoconutAcquired from './components/Task2/CoconutAcquired';



import NewMail from './components/Task3/NewMail';
import Friends from './components/Task3/Friends';
import Memories from './components/Task3/Memories';
import MailFinal from './components/Task3/MailFinal';
import MailMemory from './components/Task3/MailMemory';

import GardenLeftTaskComplete from './components/Tutorial/GardenLeftTaskComplete';
import GardenRightTaskComplete from './components/Tutorial/GardenRightTaskComplete';
import GardenRightNotif from './components/Tutorial/GardenRightNotif';
import TownTutorial from './components/Tutorial/TownTutorial';
import TownTutorialPlant from './components/Tutorial/TownTutorialPlant';
import TownMailTutorial from './components/Tutorial/TownMailTutorial';
import TownFinal from './components/Tutorial/TownFinal';


import Test from './components/Test';

const Stack = createStackNavigator();
 
const onStateChange = (state) => {
  const routeName = getActiveRouteName(state);
  console.log("Current Screen:", routeName);
};

export default function App() {

  return (
    <NavigationContainer onStateChange={onStateChange}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
        gestureEnabled: false, 
        animationEnabled: false,
      }}
    > 
  
    
    <Stack.Screen name = "Loading" component = {Loading}/>
    <Stack.Screen name = "TitleScreen" component = {TitleScreen}/>
    <Stack.Screen name = "TownTutorial" component = {TownTutorial}/>
    <Stack.Screen name = "TownMailTutorial" component = {TownMailTutorial}/>
    <Stack.Screen name = "TownTutorialPlant" component = {TownTutorialPlant}/>
    <Stack.Screen name = "Town" component = {Town}/>
    <Stack.Screen name = "TownFinal" component = {TownFinal}/>


  
    <Stack.Screen name = "GardenLeft" component = {GardenLeft}/>
    <Stack.Screen name = "GardenRight" component = {GardenRight}/>

    <Stack.Screen name = "GardenLeftTaskComplete" component = {GardenLeftTaskComplete}/>
    <Stack.Screen name = "GardenRightTaskComplete" component = {GardenRightTaskComplete}/>
    <Stack.Screen name = "GardenRightNotif" component = {GardenRightNotif}/>
    <Stack.Screen name = "GardenLeftSolo" component = {GardenLeftSolo}/>
    <Stack.Screen name = "GardenRightSolo" component = {GardenRightSolo}/>

    <Stack.Screen name = "Complete" component = {Complete}/>
    <Stack.Screen name = "Cherry" component = {Cherry}/>
    <Stack.Screen name = "FullMemory" component = {FullMemory}/>
    <Stack.Screen name = "Eat" component = {Eat}/>

    <Stack.Screen name = "Market" component = {Market}/>
    <Stack.Screen name = "CoconutAcquired" component = {CoconutAcquired}/>
    <Stack.Screen name = "CherryAcquired" component = {CherryAcquired}/>
    <Stack.Screen name = "AppleAcquired" component = {AppleAcquired}/>
    <Stack.Screen name = "PeachAcquired" component = {PeachAcquired}/>
    <Stack.Screen name = "SeedSelection" component = {SeedSelection}/>
  

    <Stack.Screen name = "CreateStart" component = {CreateStart}/>
    <Stack.Screen name = "Description" component = {Description}/>
    <Stack.Screen name = "Review" component = {Review}/>
    <Stack.Screen name = "Music" component = {Music}/>
    <Stack.Screen name = "People" component = {People}/>
    <Stack.Screen name = "Emotions" component = {Emotions}/>


    <Stack.Screen name = "MailFinal" component = {MailFinal}/>
    <Stack.Screen name = "Memories" component = {Memories}/>
    <Stack.Screen name = "Friends" component = {Friends}/>
    <Stack.Screen name = "NewMail" component = {NewMail}/>
    <Stack.Screen name = "MailMemory" component = {MailMemory}/>
  
  </Stack.Navigator>
</NavigationContainer>

  );
}

function getActiveRouteName(state) {
  if (!state || !state.routes) {
    return null;
  }
  const route = state.routes[state.index];
  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }
  return route.name;
}
