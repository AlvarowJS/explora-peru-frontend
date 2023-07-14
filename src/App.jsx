import React from 'react'
import AppRouter from './router/AppRouter'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes'
const App = () => {
  return (
    <>
      <ThemeProvider theme={ lightTheme }>
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App