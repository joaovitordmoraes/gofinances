import React, { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from 'styled-components'

import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { Register } from './src/screens/Register'
import loadExpoEmbed from './src/utils/loadExpoEmbed'

export default function App() {
  SplashScreen.preventAutoHideAsync()
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  const [loaded, setLoaded] = useState(false);

  if (!fontsLoaded) {
    return null
  }

  useEffect(() => {
    loadExpoEmbed(true);
  }, [])

  SplashScreen.hideAsync()

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  )
}
