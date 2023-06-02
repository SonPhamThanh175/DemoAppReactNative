/**
 yarn add react-navigation
 yarn add react-native-safe-area-context
 yarn add @react-navigation/bottom-tabs 
 yarn add @react-navigation/native 
 yarn add @react-navigation/native-stack
 yarn add axios 
 */

import { AppRegistry} from 'react-native'
import React from 'react';
import { name as appName } from './app.json'
import {
    Welcome,
    Login,
    Register,
    ItemList,
    ProductGridView,
    Settings,
} from './screens';
// import UITab from './navigation/UITab';
import App from './navigation/App';
import UITab from './navigation/UITab';
let fakeProducts = [
    {
        productName: 'Iphone1',
        year: 2014
    },
    {
        productName: 'Iphone2',
        year: 2015
    },
    {
        productName: 'Iphone3',
        year: 2016
    }
]

AppRegistry.registerComponent(appName, () => () => <App />)
