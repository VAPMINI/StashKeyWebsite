import { Typography, Button, Link, Box, Sheet } from '@mui/joy';
import React from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward'
import bg from '../assets/bg.mp4'

export default function SplashComp() {
    return (
        <div>

            <Box
                variant='outlined' color='primary'

                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: '15%',
                    px: '5%',
                    gap: 5,
                    zIndex: 1
                    
                }} 
            >
            <Box sx={{
                zIndex:-1,
                position: 'absolute',
                opacity: 0.2,
                width: 1,
                height: 1,
                top:0,
                left: 0,
                overflow: 'hidden',
                }} >

<video autoPlay muted loop className="video-background">
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </Box>


            <Typography color="primary" fontSize="lg" fontWeight="lg">
                Remember Less. Get More Done.
            </Typography>
            <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                StashKey: Your Passport to Cyber Safety
            </Typography>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                With Stashkey, it has never been easier to be more secure on the Internet
            </Typography>
            <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
                Get Started
            </Button>
            <Typography>
                Already a member? <Link fontWeight="lg">Sign in</Link>
            </Typography>
            <Typography
                level="body-xs"
                sx={{
                    position: 'absolute',
                    top: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                >
            </Typography>

        </Box>

    </div>
    )
}