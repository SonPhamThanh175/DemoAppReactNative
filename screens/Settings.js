import React, { useState, useEffect } from 'react';
import { SafeAreaView,Switch,FlatList, ScrollView, Alert, Image, ImageBackground, Text, View, Keyboard, TouchableOpacity, KeyboardAvoidingView, textDecorationLine, TextInput, Platform } from 'react-native';
import { images, icons, colors, fontSizes } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { UIHeader } from '../components';
function Settings(props) {
    const[isEnabledLockApp,setEnabledLockApp]=useState(true)
    const[isUseFingerprint,setUseFingerprint]=useState(false)
    const[isEnabledChangePassword,setEnabledChangePassword]=useState(true)
    return <SafeAreaView style={{
        flex: 1,
    }}>
        <UIHeader title={"Settings"} />
        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.1)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: colors.primary,
                    paddingStart: 10,
                }}>Commom</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='globe'
                    size={20}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Language</Text>
                <View style={{
                    flex: 1
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.6,
                }}>English</Text>
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{ paddingEnd: 10, opacity: 0.6, }}
                    color='black' />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='cloud'
                    size={18}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Environment</Text>
                <View style={{
                    flex: 1
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.6,
                }}>Production</Text>
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{ paddingEnd: 10, opacity: 0.6, }}
                    color='black' />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.1)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: colors.primary,
                    paddingStart: 10,
                }}>Account</Text>

            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='phone'
                    size={18}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Phone number</Text>
                <View style={{
                    flex: 1
                }} />
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{ paddingEnd: 10, opacity: 0.6, }}
                    color='black' />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='envelope'
                    size={18}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Email</Text>
                <View style={{
                    flex: 1
                }} />
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{ paddingEnd: 10, opacity: 0.6, }}
                    color='black' />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='sign-out-alt'
                    size={20}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Sign out</Text>
                <View style={{
                    flex: 1
                }} />
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{ paddingEnd: 10, opacity: 0.6, }}
                    color='black' />
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.1)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: colors.primary,
                    paddingStart: 10,
                }}>Security</Text>

            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='door-closed'
                    size={20}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Lock app in background</Text>
                <View style={{
                    flex: 1
                }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{marginEnd:10}}
                />                
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='fingerprint'
                    size={20}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Use fingerprint</Text>
                <View style={{
                    flex: 1
                }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setUseFingerprint(!isUseFingerprint)
                    }}
                    value={isUseFingerprint}
                    style={{marginEnd:10}}
                />                
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='lock'
                    size={20}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Change Password</Text>
                <View style={{
                    flex: 1
                }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        setEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                    style={{marginEnd:10}}
                />                
            </View>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.1)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: colors.primary,
                    paddingStart: 10,
                }}>Misc</Text>            
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='file-alt'
                    size={20}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Term of Service</Text>
                <View style={{
                    flex: 1
                }} />
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{ paddingEnd: 10, opacity: 0.6, }}
                    color='black' />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon
                    name='passport'
                    size={20}
                    style={{ paddingStart: 10, }}
                    color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Open source licenses</Text>
                <View style={{
                    flex: 1
                }} />
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{ paddingEnd: 10, opacity: 0.6, }}
                    color='black' />
            </View>
        </ScrollView>
    </SafeAreaView>
}
export default Settings