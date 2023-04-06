import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="main"
      id="footer"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          pt: mdDown ? 10 : 15,
        }}
      >
        <Typography variant={'body1'} color="white" mb={2}>
          © 2023
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
