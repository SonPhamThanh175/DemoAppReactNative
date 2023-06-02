import React, { useState, useEffect } from 'react';
import { SafeAreaView,FlatList, ScrollView, Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FiveStars from './FiveStars';
import GridItem from './GridItem';
function ProductGridView(props) {
    const [products, setProducts] = useState([
        {
            productName: 'Samsung sc6573',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay-2%20(1).png',
            price: 75,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Conven cord storage',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            productName: 'Dyson V12™ Detect Slim',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay.png',
            price: 88,
            specifications: [
                'Dry clean',
                'Conven cord storage',
            ],
            reviews: 21,
            stars: 4,
        },
        {
            productName: 'LG A9N-MAX.BIGPLVN',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay-5.png',
            price: 75,
            specifications: [
                'Conven cord storage',
            ],
            reviews: 24,
            stars: 3,
        },
        {
            productName: 'Hitachi PV-XL2K 24CV CG',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay_1.png',
            price: 99,
            specifications: [
                'Dry clean',
                'Conven cord storage',
            ],
            reviews: 23,
            stars: 5,
        },
        {
            productName: 'Tefal TY9890WO',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay-4_1.png',
            price: 66,
            specifications: [
                'Dry clean',
                'Cyclone filter',
            ],
            reviews: 25,
            stars: 4,
        },
        {
            productName: 'Philips FC6728',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay_3.png',
            price: 100,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Conven cord storage',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            productName: 'Samsung VC18M2120SB/SV',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay-6.png',
            price: 100,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Conven cord storage',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            productName: 'Powerbot-E Samsung',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay-1.png',
            price: 100,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Conven cord storage',
            ],
            reviews: 11,
            stars: 5,
        },
        {
            productName: 'Philips FC6723',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay-3_1.png',
            price: 100,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Conven cord storage',
            ],
            reviews: 15,
            stars: 4,
        },
        {
            productName: 'Philips FC6728',
            url: 'https://nguyenkim.com/images/companies/_1/Content/Blog/gia-dung/top-6-mau-may-hut-bui-gia-dinh-tot-nhat-hien-nay-2.png',
            price: 100,
            specifications: [
                'Dry clean',
                'Cyclone filter',
                'Conven cord storage',
            ],
            reviews: 29,
            stars: 4,
        },

    ])
    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <View style={{
            height: 60,
            justifyContent: 'center',
        }}>
            <Text style={{
                alignSelf: 'center',
                fontSize:fontSizes.h1,
                fontWeight: 'bold',
                marginTop:10
            }}> Best of sales</Text>
        </View>
        <FlatList
            data={products}
            numColumns={2}
            keyExtractor={item => item.productName}
            renderItem={({ item, index }) => <GridItem item={item} index={index}
                onPress={() => {
                    let clonedProducts = products.map(eachProduct => {
                        if (item.productName === eachProduct.productName) {
                            //     return { ...eachProduct, isSaved: true
                            // }
                            return {
                                ...eachProduct,
                                isSaved: eachProduct.isSaved == false
                                    || eachProduct.isSaved == undefined
                                    ? true : false
                            }
                        }
                        return eachProduct
                    })
                    setProducts(clonedProducts)
                }}
            />}

        />
    </SafeAreaView >
}
export default ProductGridView;