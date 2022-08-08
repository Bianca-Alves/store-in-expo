import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import products from '../../../assets/data/products';
import ProductCard from '../../components/ProductCard';

// import { Container } from './styles';

const Products = () => {
    return (
        <View style={styles.productsWrapper}>
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
        </View>
    );
}

export default Products;

const styles = StyleSheet.create({
    productsWrapper: {
        width: '100%',
        overflowX: 'none',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})