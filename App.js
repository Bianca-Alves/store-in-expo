import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './src/components/Carousel';
import products from './assets/data/products'
import Footer from './src/components/Footer';
import { FlatList } from 'react-native-web';
import ProductCard from './src/components/ProductCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList 
        style={{
          marginBottom: 60
        }}
        data={products}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
              <ProductCard 
                  imageW={100}
                  imageH={100}
                  time={5000} 
                  colors={item.color}
                  title={item.name}
                  category={item.category}
                  price={item.price}
                  key={index}
                  height={350}
                  width={400}
                  marginTop={60}
              />)
        }}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});