import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import LoginScreen from './screens/login-screen'
import RegisterScreen from './screens/register-screen'
import Dashbaord from './screens/dashboard-screen'
import NewComplaint from './screens/newComplaint-screen'
import ComplaintDetails from './screens/complaintDetails-screen'
import ComplaintConfirmation from './screens/complaintConfirmation-screen'
import WithdrawComplaint from './screens/withdrawComplaint-screen'
import TrackComplaint from './screens/trackComplaint-screen'

const StackRoot = createNativeStackNavigator()

const App = () => {
  return (
    <StackRoot.Navigator initialRouteName="Login">
      <StackRoot.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <StackRoot.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: true, headerTitle: 'User Registration' }}
      />
      <StackRoot.Screen
        name="Dashboard"
        component={Dashbaord}
        options={{ headerShown: false }}
      />
      <StackRoot.Screen
        name="New Complaint"
        component={NewComplaint}
        options={{
          headerShown: true,
          headerTitle: 'New Complaint',
          headerTitleAlign: 'center',
          headerTransparent: true
        }}
      />
      <StackRoot.Screen
        name="Complaint Details"
        component={ComplaintDetails}
        options={{
          headerShown: true,
          headerTitle: 'Complaint Details',
          headerTitleAlign: 'center',
          headerTransparent: true
        }}
      />
      <StackRoot.Screen
        name="Complaint Confirmation"
        component={ComplaintConfirmation}
        options={{
          headerShown: true,
          headerTitle: 'Confirmation',
          headerTitleAlign: 'center',
          headerTransparent: true
        }}
      />
      <StackRoot.Screen
        name="Withdraw"
        component={WithdrawComplaint}
        options={{
          headerShown: true,
          headerTitle: 'Withdraw Complaint',
          headerTitleAlign: 'center',
          headerTransparent: true
        }}
      />
      <StackRoot.Screen
        name="Track"
        component={TrackComplaint}
        options={{
          headerShown: true,
          headerTitle: 'Track Complaint',
          headerTitleAlign: 'center',
          headerTransparent: true
        }}
      />
    </StackRoot.Navigator>
  )
}

export default App
