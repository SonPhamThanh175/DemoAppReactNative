import React, { Component } from 'react'
import { TouchableOpacity, Text,Image,isSelected } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { images, icons,colors } from '../constants';

function UIButton(props) {
    const { onPress, title, isSelected } = props
    return <TouchableOpacity
        onPress={onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 40,
            borderRadius: 5,
            marginHorizontal: 20,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ? 'white' : 'rgb(59,139,223)'
        }}>
        
        {/* doi icon */}
        {/* {isSelected == true && <Icon
            size={15}
            name={"check-circle"} style={{
                position: 'absolute',
                left: 10,
                top: 10
            }} />} */}
        {isSelected == true && <Image
                        source={
                            icons.icon_check
                        }
                        style={{
                            width: 15,
                            height: 15,
                            // tintColor: 'white'
                            marginLeft : 1

                        }}
                    />}

       
        <Text style={{
            color: isSelected == true ? "black" : "white",
            // color:  "black",
            fontWeight: 'bold',

        }}>{title}</Text>
    </TouchableOpacity>
}
export default UIButton