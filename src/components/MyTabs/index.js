import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';

import Home from '../../pages/Home';
import Products from "../../pages/Products";
import AboutUs from "../../pages/AboutUs";
import ContactUs from "../../pages/ContactUs";
import ProductsDescription from "../../pages/ProductsDescription";
  
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator firstRoute="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Produtos" component={Products} />
      <Tab.Screen name="Sobre Nós" component={AboutUs} />
      <Tab.Screen name="Nos Contate" component={ContactUs} />
      <Tab.Screen name="Descrição dos Produtos" component={ProductsDescription} />
    </Tab.Navigator>
  );
}