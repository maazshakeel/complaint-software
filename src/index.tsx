import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import LoginScreen from './screens/login-screen'
import RegisterScreen from './screens/register-screen'

const StackRoot = createNativeStackNavigator()

const App = () => {
  return (
    <StackRoot.Navigator initialRouteName="Login">
      <StackRoot.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <StackRoot.Screen name="Register" component={RegisterScreen} options={{ headerShown: true, headerTitle: "User Registration" }} />
    </StackRoot.Navigator>
  );
}

export default App
