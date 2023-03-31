import React from 'react';
import {
  Box,
  Stack,
  IconButton,
  SvgIcon,
  Link,
  Container,
  Typography,
} from '@mui/material';

const Hero = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: 900,
        backgroundImage: 'url(/galaxy.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h2" fontWeight={'bold'} color="white">
          Dede Harianto
        </Typography>
        <Typography fontWeight={'light'} color="white">
          I'm a Full Stack Developer
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
