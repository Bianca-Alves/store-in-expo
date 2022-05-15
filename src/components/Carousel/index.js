import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { InteractionManager } from 'react-native';

//
export default function Carousel({imageW, imageH, time, data}) {
    const ref = React.useRef(null)
    
    const scrollX = React.useRef(new Animated.Value(0)).current;
    
    const [index, setIndex] = React.useState(1);

    /** 
    const dataLength = data.length
    const nextImage = () => {
        if (index < dataLength) {
            setInitialScrollIndex(imageW * index)
            setIndex((index+1))
        } else {
            setIndex(0)
        }
    }*/
    

    
    return (
            <Animated.FlatList 
                ref={ref}
                data={data} 
                style={{
                    backgroundColor: 'black',
                    maxWidth: imageW,
                    maxHeight: imageH,
                }}

                showsHorizontalScrollIndicator={false}

                initialScrollIndex={index}
                pagingEnabled={true}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    { useNativeDriver: true}    
                )}
                
                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                progressViewOffset={1}
                renderItem={({item, index: Findex}) => {
                    
                    return (
                        <Image source={require(`../../../assets/img/${item}`)} 
                            key={Findex.toString()}
                    
                            style={{
                                width: imageW,
                                height: imageH,
                                resizeMode: 'cover',
                            }} 
                        />
                    )
                }}
            />
    )
}