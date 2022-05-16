import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './src/components/Carousel';
import products from './assets/data/products'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {products.map((product) => {
        return (<Carousel imageW={'100px'} imageH={'100px'} time={1000} data={product.color} key={product.id} />)
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
