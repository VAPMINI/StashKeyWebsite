import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import React from 'react';


export default function(){
    return(
        <Sheet
              color='primary' variant='soft'
              sx={{
                width: 300,
                mx: 'auto', 
                my: 4, 
                py: 4, 
                px: 2, 
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'lg',
                boxShadow: 'md',
              }}
            >
              <div>
                <Typography level="h4" component="h1">
                  Welcome!
                </Typography>
                <Typography level="body-sm">Sign in to continue</Typography>
              </div>


              <FormControl >
                <FormLabel> Email </FormLabel>
                <Input name='email' type='email' placeholder='Enter your email' > </Input>
              </FormControl>
              <FormControl>

                <FormLabel> Password </FormLabel>
                <Input name='password' type='password' placeholder='Enter your password' ></Input>

              </FormControl>

              <Button >
                Log in
              </Button>
              <Typography
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Don't have an account?
              </Typography>


            </Sheet>
    )
}