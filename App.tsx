import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import Dashbaord from './src/screens/dashboard-screen'
import NewComplaint from './src/screens/newComplaint-screen'
import ComplaintDetails from './src/screens/complaintDetails-screen'
import ComplaintConfirmation from './src/screens/complaintConfirmation-screen'
import WithdrawComplaint from './src/screens/withdrawComplaint-screen'
import TrackComplaint from './src/screens/trackComplaint-screen'
import ComplaintView from './src/screens/complaintView-screen'
import LoginScreen from './src/screens/login-screen'
import RegisterScreen from './src/screens/register-screen'

import Navigator from './src'

const StackRoot = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}
