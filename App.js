import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={{backgroundColor:'#F4F3F4', flex:1}}>
      <Header />
    </View>
  );
}