import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductsDescription = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Olá, essa é a tela de descrição dos produtos.
        </Text >
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 450,
    color: 'black',
  },
  title: {
    color: 'black',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    marginTop: 25,
  }
})
export default ProductsDescription;