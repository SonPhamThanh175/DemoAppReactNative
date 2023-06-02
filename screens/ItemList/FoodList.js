import React, { useState, useEffect } from 'react';
import { SafeAreaView,FlatList, ScrollView, Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FoodItem from './FoodItem';

function FoodList(props) {
    //List of items = state
    //Data list 2
    const [items, setItems] = useState([
        {
            name: 'The cassoulet',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/escargot-1.jpg',
            status: 'opening now',
            price: 64.45,
            website: 'http://edition.cnn.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/andyp.175',
                instagram: 'https://www.instagram.com/andyp.175/',
                twitter: 'https://twitter.com/andyp.175/',
            }

        },
        {
            name: 'The veal blanquette',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Langue-de-Boeuf-Fumee.jpg',
            status: 'opening now',
            price: 45.45,
            website: 'http://edition.cnn.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/andyp.175',

            }

        },
        {
            name: 'Frog legs',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Pigeon-735x490.jpg',
            status: 'closing now',
            price: 123.45,
            website: 'http://edition.cnn.com',
            socialNetworks:
            {
                instagram: 'https://www.instagram.com/andyp.175/',
                twitter: 'https://twitter.com/andyp.175/',
            }

        },
        {
            name: 'The croque-monsieur',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Tete-de-Veau-720x540.jpg',
            status: 'comming now',
            price: 123.45,
            website: 'http://edition.cnn.com',
            socialNetworks:
            {
                instagram: 'https://www.instagram.com/andyp.175/',
            }

        },
        {
            name: 'The gratin dauphinois',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Ris-de-Veau-735x490.jpg',
            status: 'closing now',
            price: 23.45,
            website: 'http://edition.cnn.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/andyp.175',
                instagram: 'https://www.instagram.com/andyp.175/',
            }

        },
    ])
    //Data list 1
    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg',
        },
        {
            name: 'BreakFast',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Boudin-Noir-735x492.jpg',
        },
        {
            name: 'Coffe',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/French-Onion-Soup-768x530.jpg',
        },
        {
            name: 'HotDog',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Boeuf-Bourguignon-728x410.jpg',
        },
        {
            name: 'Noodles',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Steak-tartare-768x512.jpg',
        },
        {
            name: 'Dinner',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Steak-tartare-768x512.jpg',
        },
        {
            name: 'Cake',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Pate-a-Choux-768x511.jpg.webp',
        },
        {
            name: 'CupCake',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Chocolate-Souffle-768x513.jpg',
        },
        {
            name: 'Drink',
            url: 'https://viatravelers.com/wp-content/uploads/2015/09/Coq-au-Vin-735x488.jpg',
        }

    ])
    const [searchText, setSearchText] = useState('')
    // can duoc Fix (dong 122 +213)
    const filteredFoods = () => items.filter(eachFood => eachFood.name.toLowerCase()
        .includes(searchText.toLowerCase()))

    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'whitle'
    }}>
        <View>
            {/* //List Item dang ngang */}
            <View style={{
                height: 60,
                marginHorizontal: 10,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='search' size={20} color={'black'}
                    style={{
                        position: 'absolute',
                        marginStart: 5
                    }}
                />
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setSearchText(text);
                    }}
                    style={{
                        backgroundColor: colors.inactive,
                        height: 35,
                        flex: 1,
                        marginEnd: 5,
                        borderRadius: 10,
                        color: 'black' * 2,
                        fontWeight: 'bold',
                        opacity: 0.5,
                        paddingStart: 40
                    }} />
                <Icon name='bars' size={30} color={colors.inactive} />
            </View>
            <View style={{
                height: 100,
            }}>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />
                <FlatList
                    horizontal={true}
                    data={categories}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={() => {
                                alert(`Press ${item.name}`)
                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image
                                style={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: 'cover',
                                    borderRadius: 25,
                                    margin: 10
                                }}
                                source={{
                                    uri: item.url
                                }} />
                            <Text style={{
                                fontSize: fontSizes.h6 * 0.9
                            }}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    style={{ flex: 1, }}>

                </FlatList>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />
            </View>
            {/* //List Item dang doc  */}
            {/* <ScrollView>
                {items.map(eachItem => {
                    return <FoodItem item={eachItem} key={eachItem.name}/>
                })}
            </ScrollView> */}
            {/* <FlashList
                data={items}
                renderItem={({ item }) => {
                    return <FoodItem food = {item} key={item.name}/>
                }}
                keyExtractor={eachItem => eachItem.name}
            /> */}
        </View>
        {filteredFoods().length > 0 ? <FlatList
            // data={items}
            data={filteredFoods()}

            renderItem={({ item }) => <FoodItem
                onPress={() => {
                    alert(`You press items name: ${item.name}`)
                }}
                item={item} key={item.name} />}
            keyExtractor={eachItem => eachItem.name}
        /> : <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3,
            }}>No food found</Text>
        </View>}
    </SafeAreaView>
}
export default FoodList