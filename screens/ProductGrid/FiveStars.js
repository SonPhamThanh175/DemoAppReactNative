import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function FiveStars(props) {
    const { numberOfStars } = props
    return <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }}>
        {[0, 1, 2, 3, 4].map(item => <Icon
            key={`${item}`}
            name='star'
            size={10}
            style={{ marginEnd: 2 }}
            color={item <= numberOfStars - 1 ? colors.warning : colors.inactive} />)}
    </View>
}
export default FiveStars