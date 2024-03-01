import Sheet from '@mui/joy/Sheet';
import React from 'react';
import ModeToggle from './ModeToggle';
import { Button, IconButton, Stack, Typography } from '@mui/joy';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
export default function Navbar(){
  return (
    <Sheet color='neutral'
  variant='outlined'
  sx={{
    width:1,
    height:'80px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    px : 10,
    pv : 'auto'
}}
>
  <IconButton 
            size="lg"
            variant="outlined"
            color="neutral"
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              borderRadius: '50%',
            }}
            >
    <LanguageRoundedIcon />
  </IconButton>

    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}

    >

    <Button color='neutral' variant='plain' aria-pressed="true"> Home </Button>
    <Button color='neutral' variant='plain'> About </Button>
    <Button color='neutral' variant='plain'> Contact </Button>
    <ModeToggle />

    </Stack>

</Sheet>
  )
}