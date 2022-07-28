import React, { useState } from 'react'
import {
  Text,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  Alert,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/core'
import colors from '../assets/colors'
import client from '../../api/api'

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cnic, setCnic] = useState('')
  const [block, setBlock] = useState('')
  const [houseNo, setHouseNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

  const registerUser = async () => {
    if (!firstName || !lastName || !cnic || !block || !houseNo || !email || !password) {
      Alert.alert('Field Missing')
      return
    }
    const signUp = await client.post('/api/register', {
      firstName: firstName,
      lastName: lastName,
      cnic: cnic,
      block: block,
      homeNo: 12344,
      phoneNo: "098468994",
      email: email,
      password: password
    });
    if (signUp.data.status === 'success') {
      Alert.alert(`${signUp.data.message}. Please Log in.`)
      navigation.navigate('Login')
      return
    } else {
      Alert.alert(signUp.data.message)
    }

    /* if (result) {
      Alert.alert("You've successfuly registered. Please log in.")
      return
    }
    else {
      Alert.alert(result.message)
      return
    } */
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={200}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="First Name"
            placeholderTextColor={colors.textColor}
            onChangeText={firstName => setFirstName(firstName)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Last Name"
            placeholderTextColor={colors.textColor}
            onChangeText={lastName => setLastName(lastName)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="CNIC"
            placeholderTextColor={colors.textColor}
            onChangeText={cnic => setCnic(cnic)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Block"
            placeholderTextColor={colors.textColor}
            onChangeText={block => setBlock(block)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="House Number"
            placeholderTextColor={colors.textColor}
            onChangeText={houseNo => setHouseNo(houseNo)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email / Phone"
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
            style={{ display: 'flex', flexDirection: 'row', marginLeft: wp(0) }}
          >
            {/* @ts-ignore */}
            <TouchableOpacity style={styles.loginBtn} onPress={registerUser}>
              {/* @ts-ignore */}
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    width: wp(70),
    height: 45,
    marginBottom: 5
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },

  forgot_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: wp(18)
  },

  loginBtn: {
    width: wp(35),
    borderRadius: 10,
    height: 50,
    marginLeft: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8D4E4'
  }
})
