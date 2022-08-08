import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { useFonts } from 'expo-font';
import { NavigationContainer, createMaterialTopTabNavigator,
  createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import Home from './src/pages/Home';
import Products from './src/pages/Products';
import Settings from './src/pages/AboutUs';
import MyTabs from './src/components/MyTabs';

// const Tab = createBottomTabNavigator();

export default function App() {
  const {width, _} = Dimensions.get('screen')
  let selectedWidth = width

  //web selectedWidth limit = 840 / mobile = 425
  if (selectedWidth > 425) {
    selectedWidth = 425
  }

  let [fontsLoaded] = useFonts({
    'Samsung-Logo': require('./assets/fonts/SamsungLogo.ttf'),
    'Samsung-Sans': require('./assets/fonts/SamsungSans-Regular.ttf'),
    'Samsung-Sans-Bold': require('./assets/fonts/SamsungSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    

      // <NavigationContainer>
      //   <StatusBar />
      //   <Tab.Navigator screenOptions={{
      //     headerShown: false,
      //     tabBarActiveTintColor: '#2D66FF',
      //     tabBarShowLabel: false,
      //   }}>
          
      //     <Tab.Screen 
      //       name = 'Home'
      //       component = {Home}
      //       options={{
      //         tabBarIcon: ({color, size}) => {
      //           return <Entypo name="home" size={size} color={color}/>
      //         }
      //       }}
      //     >
      //     </Tab.Screen>

      //     <Tab.Screen 
      //       name = 'Products'
      //       component = {Products}
      //       options={{
      //         tabBarIcon: ({color, size}) => {
      //           return <Entypo name="shopping-bag" size={size} color={color}/>
      //         }
      //       }}
      //     >
      //     </Tab.Screen>

      //     <Tab.Screen 
      //       name = 'Settings'
      //       component = {Settings}
      //       options={{
      //         tabBarIcon: ({color, size}) => {
      //           return <Ionicons name="settings" size={size} color={color}/>
      //         }
      //       }}
      //     >

      //     </Tab.Screen>
      //   </Tab.Navigator>
      // </NavigationContainer>
  );
}