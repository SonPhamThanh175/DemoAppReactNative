import React, { useState, useEffect } from 'react';
import { Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../../constants';
import { UIButton } from '../../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Truyen color cho "status"
function _getColorFromStatus(status) {
    return status.toLowerCase().trim() == 'opening now' ? colors.success :
        (status.toLowerCase().trim() == 'closing now' ? colors.alert :
            (status.toLowerCase().trim() == 'comming now' ? colors.warning : success))
}
function FoodItem(props) {
    let { name,
        price,
        socialNetworks,
        status,
        url,
        website,} = props.item
const {onPress} = props
    return (<TouchableOpacity
        onPress={onPress}
        style={{
            height: 150,
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row',
        }}>
        <Image
            style={{
                width: '30%',
                height: '70%',
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 15,
                marginTop: 10,
            }}
            source={{
                uri: url
            }} />
        <View style={{
            flex: 1,
            marginRight: 10
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black'
            }} />
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>Status :</Text>
                <Text style={{
                    color: _getColorFromStatus(status),
                    fontSize: fontSizes.h5,
                }}>{status.toUpperCase()} </Text>
            </View>
            <Text style={{
                color: colors.inactive,
                fontSize: fontSizes.h5,
            }}>Price : {price} $</Text>
            <Text style={{
                color: colors.inactive,
                fontSize: fontSizes.h5,
            }}>Food type : Snail</Text>
            <Text style={{
                color: colors.inactive,
                fontSize: fontSizes.h5,
            }}>Website : {website}</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                {socialNetworks['facebook'] != undefined && <Icon
                    style={{
                        paddingEnd: 5
                    }}
                    name='facebook'
                    size={18}
                    color={colors.inactive} />}
                {socialNetworks['twitter'] != undefined && <Icon
                    style={{
                        paddingEnd: 5
                    }}
                    name='twitter'
                    size={18}
                    color={colors.inactive} />}
                {socialNetworks['instagram'] != undefined && <Icon
                    style={{
                        paddingEnd: 5
                    }}
                    name='instagram'
                    size={18}
                    color={colors.inactive} />}
            </View>
        </View>
    </TouchableOpacity>)
}
export default FoodItem