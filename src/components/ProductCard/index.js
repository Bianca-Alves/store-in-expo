import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Carousel from '../Carousel';

export default function ProductCard({imageW, imageH, time, colors, title, price, category, height, width, marginTop}) {

    return (
        <TouchableOpacity style={{
                minHeight: height,
                minWidth: width,
                marginTop: marginTop,
                borderWidth: 1,
                textAlign: 'center',
                padding: 20
            }}>
            <View style={styles.carousel}>
                <Carousel imageW={imageW} imageH={imageH} time={time} data={colors} />
            </View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity style={styles.buy}>
                <Text style={styles.buyText} >COMPRAR</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carousel: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 4
    },
    title: {
        fontSize: 24,
        maxWidth: '100%',
        fontWeight: 600,
        textAlign: 'center',
    },
    category: {
        fontSize: 15,
        fontWeight: 400,
        maxWidth: '100%',
        textAlign: 'left',
    },
    price: {
        fontSize: 20,
        textAlign: 'center',
        maxWidth: '100%',
    },
    buy: {
        fontSize: 20,
        textAlign: 'center',
    },
    buyText: {
        fontSize: 20,
        textAlign: 'center',
        maxWidth: '100%',
    },
})