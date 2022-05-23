import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Carousel from './src/components/Carousel';
import products from './assets/data/products'
import news from './assets/data/news'
import Footer from './src/components/Footer';
import ProductCard from './src/components/ProductCard';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function App() {
  const {width, height} = Dimensions.get('screen')
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
    <View style={styles.smartphone}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Hero />
        <View style={{height: 60}}></View>
        <Carousel
          imageW={selectedWidth * 0.8}
          imageH={400}
          data={news}
          time={8000}
          buttons={true}
        />      
        <Text style={styles.title}>Nossos Produtos</Text>
        <FlatList 
          data={products}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
                <ProductCard 
                    imageW={100}
                    imageH={100}
                    time={5000}
                    quantity={item.quantity}
                    buttons={false}
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
    </View>
  );
}

const styles = StyleSheet.create({
  smartphone: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    maxWidth: 425,
    maxHeigth: 638,
  },
  container: {
    maxWidth: 425,
    overflowY: 'scroll',
    overflowX: 'none',
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
    marginTop: 70,
    marginBottom: 15,
    fontFamily: 'Samsung-Sans',
  }
});