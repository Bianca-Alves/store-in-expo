import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './src/components/Carousel';
import products from './assets/data/products'
import Footer from './src/components/Footer';
import { FlatList } from 'react-native-web';
import ProductCard from './src/components/ProductCard';
import Header from './src/components/Header';
import Hero from './src/components/Hero';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Hero />
      <Text style={styles.title}>Nossos Produtos</Text>
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
                  width={300}
                  marginTop={25}
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
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  title: {
    fontSize: 40,
    fontWeight: 600,
    width: '90%',
    textAlign: 'left',
    marginTop: 50,
  }
});