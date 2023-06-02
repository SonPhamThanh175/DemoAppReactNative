// yarn add react-navigation  
// yarn add react-native-safe-area-context 
// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/native
// yarn add @react-navigation/native-stack
import * as React from 'react'
import { Settings, ProductGridView, ItemList ,Profile} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { fontSizes, colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native';

const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTinColor: "black",
    tabBarIntiveTinColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.inactive,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarBackground:()=>(
        <View style={{backgroundColor:colors.primary,flex:1}}/>
    ),
    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name
        // let iconName = "facebook ";
        // if (screenName == "ProductGridView") {
        //     iconName = "align-center"
        // } else if (screenName == "FoodList"){
        //     iconName = "accusoft"
        // }else if (screenName == "Settings"){
        //     iconName = "cogs"
        // }
        return <Icon
            name={screenName == "ProductGridView" ? "align-center" :
                (screenName == "ItemList" ? "accusoft" : (
                    screenName == "Settings" ? "cogs" : (route.name=="Profile"?"user":"")
                ))}
            size={23}
            color={focused ? 'white' : colors.inactive}
            style={{
                justifyContent: 'center',
            }} />
    }
})
const Tab = createBottomTabNavigator()
function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
            name={"ProductGridView"}
            component={ProductGridView}
            options={{
                tabBarLabel: 'Produts',
                tabBarLabelStyle: {
                    fontSize:fontSizes.h5
                }
            }} />
        <Tab.Screen
            name={"Itemlist"}
            component={ItemList}
            options={{
                tabBarLabel: 'Alls',
                tabBarLabelStyle: {
                    fontSize:fontSizes.h5
                }
            }}
        />
        <Tab.Screen
            name={"Settings"}
            component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarLabelStyle: {
                    fontSize:fontSizes.h5
                }
            }}
        />
        <Tab.Screen
            name={"Profile"}
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarLabelStyle: {
                    fontSize:fontSizes.h5
                }
            }}
        />
    </Tab.Navigator>
}
export default UITab