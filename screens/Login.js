
import React, { useState, useEffect } from 'react';
import { Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../constants';
import { UIButton } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { isValidEmail, isValidPassword } from '../utilies/Validation';
import Icon from 'react-native-vector-icons/FontAwesome5';


function Login(props) {
    const [keyboardIsShown, setKeyboardIsShown] = useState(false)
    //State nhap dung dinh dang Email , Password
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //state luu tru Email ,Password
    const [email, setEmail] = useState('son@gmail.com')
    const [password, setPassword] = useState('1234567')
    const [isValid, setIsValid] = useState(false)

    const checkValid = () => {
        const isValid = email.length > 0 && password.length > 0
            && isValidEmail(email)
            && isValidPassword(password) ? true : false
        setIsValid(isValid)
    }

    useEffect(() => {
        //componentDidmount
        // ban phim noi len thi HIDE button "Login"
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShown(true);
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShown(false);
        })
    }, [])

    useEffect(() => {
        if (email && isValidEmail(email) == false) {
            setErrorEmail('Email not in correct fomat')
        } else {
            setErrorEmail('')
        }
        if (password && isValidPassword(password) == false) {
            setErrorPassword('Password must be at least 6 characters long')
        } else {
            setErrorPassword('')
        }
        checkValid()
    }, [email, password])
    //Navigation 
    const { navigation,route } = props
    //funtion of navigate to/back
    const { navigate,goBack } = navigation
    
    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
            flex: 100,
            backgroundColor: 'white'
        }}>
        <View style={{
            flex: 35,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h2,
                marginTop: 15,
                fontWeight: 'bold',
                width: '50%'
            }}>Already have an Account ?</Text>
            <Image
                tintColor={Colors.primary}
                source={
                    images.computer
                } style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center'

                }} />
        </View>
        <View style={{
            flex: 25,
        }}>
            <Icon name="users" size={25}
                style={{
                    marginLeft:20,
                    color: colors.primary,
                }}
            />


            <View style={{
                marginHorizontal: 20
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h5,
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                    style={{
                        marginTop: 5
                    }}
                    placeholder='example@gmail.com'
                    value={email}
                    placeholderTextColor={colors.placholder}
                />
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginTop: 5,
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center',
                }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                }}>{errorEmail}</Text>
            </View>
            <View style={{
                marginHorizontal: 20
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h5,
                    marginTop: 10
                }}>Password:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                    style={{
                        marginTop: 5
                    }}
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    value={password}
                    placeholderTextColor={colors.placholder}
                />
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginTop: 5,
                    marginBottom: 15,
                    marginHorizontal: 15,
                    alignSelf: 'center',
                }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                }}>{errorPassword}</Text>
            </View>
        </View>
        {keyboardIsShown == false && <View style={{
            flex: 15
        }}>
            <TouchableOpacity
                // Nhap sai cu phap Email , password thi nut Login k an duco vao
                disabled={!isValid}
                onPress={() => {
                    // alert(`Email = ${email} ,password = ${password}`);
                    navigate('UITab')
                }}
                style={{

                    backgroundColor: isValid == true
                        ? colors.primary : colors.inactive,
                    // backgroundColor: colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 40,
                    marginTop: 15,
                    borderRadius: 10
                }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h5,
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigate('Register')
                }}
                style={{
                    padding: 5
                }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h6,
                    color: colors.primary,
                    alignSelf: 'center'
                }}>New user ? Register now</Text>
            </TouchableOpacity>
        </View>
        }
        <View style={{
            flex: 25,
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
            }}>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h6,
                    color: 'black',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    marginHorizontal: 5,
                }}>Use other methods ?</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                {/* <Icon name ='facebook' size={35} color={colors.facebook} />
                <View style={{width:15}}/>
                <Icon name ='facebook' size={35} color={colors.facebook} /> */}
                <Image
                    source={
                        icons.icon_facebook
                    }
                    style={{
                        width: 27,
                        height: 27,
                        marginRight: 10

                    }}
                />
                <View style={{ width: 15 }} />
                <Image
                    source={
                        icons.icon_google
                    }
                    style={{
                        width: 25,
                        height: 25,
                        // tintColor: 'white'
                        marginRight: 10

                    }}
                />
            </View>
        </View>
    </KeyboardAvoidingView >
}
export default Login