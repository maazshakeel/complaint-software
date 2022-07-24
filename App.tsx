import React from 'react'
import AppContainer from './src/components/app-container'

import Navigator from './src/'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}
