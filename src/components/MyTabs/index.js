import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';

import Home from '../../pages/Home';
import Products from "../../pages/Products";
import AboutUs from "../../pages/AboutUs";
  
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator firstRoute="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Produtos" component={Products} />
      <Tab.Screen name="Sobre Nós" component={AboutUs} />
    </Tab.Navigator>
  );
}