import React, { useState, useEffect } from 'react';
import { Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../constants';
import { UIButton } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    user as UserRepository,
    population as PopulationRepository
} from '../repositories';

function Profile(props) {
    UserRepository.getUserDetail()
    return <SafeAreaView style={{
        flex:1,
        backgroundColor:'green'
    }}>
        <Text> This is Profile</Text>
    </SafeAreaView>
}
export default Profile