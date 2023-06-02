import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FiveStars from './FiveStars';
function GridItem(props) {
    const { item, index, onPress } = props;
    return <View style={{
        flex: 0.5,
        height: 230,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: index == 0 && index == 1 ? 10 : 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.inactive
    }}>
        <View style={{
            flexDirection: 'row',
            // marginTop: 10
        }}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginRight: 15,
                }}
                source={{
                    uri: item.url
                }} />
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h1,
                marginTop: 10
            }}>$ {item.price}
            </Text>
        </View>
        <Text style={{
            color: colors.primary,
            fontWeight: 'bold',
            fontSize: fontSizes.h6,
            marginHorizontal: 10,
            marginTop: 5,
        }}> {item.productName}
        </Text>
        {
            item.specifications.map(specifications =>
                <Text
                    key={specifications}
                    style={{
                        color: 'black',
                        fontSize: fontSizes.h6,
                        paddingHorizontal: 5,
                        paddingBottom: 5
                    }}>* {specifications}</Text>)
        }
        <View style={{
            flexDirection: 'row'
        }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: 'row',
                }}>
                <Icon name='heart'
                    size={22}
                    style={{ marginEnd: 5, marginLeft: 5 }}
                    color={item.isSaved == undefined || item.isSaved == false ?
                        colors.inactive : 'red'} />
                <Text style={{
                    color: item.isSaved == undefined || item.isSaved == false ?
                        colors.inactive : 'red',
                    fontSize: fontSizes.h6 * 0.8,
                    width: 50
                }}>Saved for later</Text>
            </TouchableOpacity>
            <View style={{
                flex: 1,
            }}>
                <FiveStars numberOfStars={item.stars} />
                <Text style={{
                    color: colors.success,
                    fontSize: fontSizes.h6,
                    textAlign: 'right',
                    paddingTop: 5,
                    paddingRight: 5
                }}>{item.reviews} review</Text>
            </View>
        </View>
    </View>
}
export default GridItem