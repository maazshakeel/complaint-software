import React from 'react'
import { Image, TouchableOpacity, View, Text, TextInput, StatusBar } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen' 
import colors from '../assets/colors'

const LoginScreen: React.FC = () => {
  return (
    <View style={{ 
      backgroundColor: colors.backgroundColor,
      flex: 1,
    }}>
      <StatusBar />
      <Image
        source={require('../assets/logo.png')}
        style={{
          position: 'absolute',
          left: wp('18%'),
          top: hp('9px'),
        }}
      />      
      <View
        style={{
          flex: 1,
          alignItems: "center",
          top: hp(23)
        }}
      >
        <Text 
          style={{
            color: colors.textColor,
            fontSize: 43,
            fontFamily: 'sans-serif'
          }}
        >
          Master City
        </Text>
      </View>
      <View style={{ flex: 1, paddingTop: 23}}>
        <View>
          <TextInput 
            placeholder="Email/Phone"
            style={{
                borderColor: colors.textColor,
                borderRadius: 6,
                top: hp(-13),
                width: wp(68),
                height: hp(8),
                borderWidth: 1,
                left: wp(16),
                paddingLeft: 13,
                fontSize: 18,
                fontFamily: 'sans-serif',
                position: 'absolute'
              }}
          />
        </View>
        <View>
          <TextInput 
            placeholder="Password"
            secureTextEntry
            style={{
                borderColor: colors.textColor,
                borderRadius: 6,
                top: hp(-3),
                width: wp(68),
                height: hp(8),
                borderWidth: 1,
                left: wp(16),
                paddingLeft: 13,
                fontSize: 18,
                fontFamily: 'sans-serif',
                position: 'absolute'
              }}
          />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{
            position:'absolute',
            width: 122,
            height: 56,
            left: 54,
            top: hp(-37),
            padding: 18,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: '#B8D4E4'
          }}
        >
          <Text style={{ fontSize: 15 }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{
            position:'absolute',
            width: 122,
            height: 56,
            left: 190,
            top: hp(-37),
            padding: 18,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: '#B8D4E4'
          }}
        >
          <Text style={{ fontSize: 15 }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen
