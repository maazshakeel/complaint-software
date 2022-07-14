import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import colors from '../assets/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/core'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor={colors.textColor}
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor={colors.textColor}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <View>
        <View
          style={{ display: 'flex', flexDirection: 'row', marginLeft: wp(3) }}
        >
          <TouchableOpacity style={[styles.loginBtn, styles.rigt]}>
            {/* @ts-ignore */}
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          {/* @ts-ignore */}
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Register')}
          >
            {/* @ts-ignore */}
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rigt: {
    marginRight: 10
  },

  image: {
    marginBottom: 40
  },

  inputView: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    width: '70%',
    height: 45,
    marginBottom: 20
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },

  forgot_button: {
    height: 30,
    marginBottom: 30
  },

  loginBtn: {
    width: wp(25),
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#B8D4E4'
  }
})
