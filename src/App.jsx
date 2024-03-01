import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box'
import { CssVarsProvider } from '@mui/joy/styles';
import React from 'react';
import { CssBaseline } from '@mui/joy';
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import SplashComp from './components/SplashComp';


function App() {
  return (
    <>

      <CssBaseline>
        <CssVarsProvider>


          <Box
            variant='plain'
            color='neutral'
            sx={{
              height: '1vh'
            }}
            >
            <Navbar />
            <SplashComp />
            <LoginPage />

          </Box>



        </CssVarsProvider>
      </CssBaseline>
            </>
  )
}

export default App
