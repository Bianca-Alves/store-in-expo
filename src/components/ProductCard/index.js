import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Carousel from '../Carousel';

export default function ProductCard({imageW, imageH, time, colors, title, price, category, height, width, marginTop}) {

    return (
        <TouchableOpacity style={{
                minHeight: height,
                width: width,
                marginTop: marginTop,
                borderWidth: 1,
                textAlign: 'center',
                paddingTop: 20,
                paddingBottom: 30,
                borderColor: '#e5e5e5',
                borderRadius: 16,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
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
        marginBottom: 2,
        minWidth: '100%',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        textAlign: 'center',
    },
    category: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 400,
        textAlign: 'left',
    },
    price: {
        fontSize: 25,
        fontWeight: 600,
        marginTop: 20,
        textAlign: 'center',
    },
    buy: {
        
        textAlign: 'center',
        width: '50%',
        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 9,
        backgroundColor: 'blue',
        borderRadius: 16,
    },
    buyText: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center',
        color: 'white'
    },
})