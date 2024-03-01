import { Typography, Button, Link, Box, Sheet } from '@mui/joy';
import React from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward'

export default function SplashComp() {
    return (
        <div>
            <Sheet
                variant='outlined'
                color='neutral'
                sx={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: '15%',
                    px: '5%',
                    gap: 5,
                }}
            >

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

        </Sheet>
        </div>
    )
}