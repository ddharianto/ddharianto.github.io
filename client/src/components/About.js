import React from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  Avatar,
  useMediaQuery,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import tech_stack from '../assets/tech_stack.json';
import avatar from '../assets/avatar.jpg';

const About = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="main"
      id="hero"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: mdDown ? 'center' : 'left',
          pt: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} lg={7}>
            <Typography variant="h4" fontWeight={'bold'} color="white" mb={2}>
              Hello,
            </Typography>
            <Typography variant="h6" color="white">
              I'm a web developer and mainly work with Javascript. Able to work
              as a front-end and back-end developer. I have experience with
              React, React Hooks, Material UI as a front-end and experience with
              Express, RESTful API as a back-end developer. Looking for as much
              experience as I could get on this platform!
            </Typography>
          </Grid>
          <Grid
            item
            xs
            md
            lg
            sx={{
              height: '100%',
              m: 2,
            }}
          >
            {!mdDown && (
              <Avatar
                src={avatar}
                sx={{
                  width: 250,
                  height: 250,
                  border: '10px solid white',
                  mx: 'auto',
                }}
              />
            )}
          </Grid>
        </Grid>
        <Container
          sx={{
            p: '60px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          <Stack
            direction="row"
            spacing={15}
            sx={{
              my: 10,
              '@keyframes slide': {
                '0%': {
                  transform: 'translateX(0)',
                },
                '100%': {
                  transform: 'translateX(calc(-250px * 7))',
                },
              },
              width: 'calc(250px * 14)',
              display: 'inline-block',
              animationName: 'slide',
              animationDuration: '10s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              backgroundColor: 'white',
            }}
          >
            {tech_stack.map((tech) => {
              return (
                <img
                  alt={tech.name}
                  src={tech.src}
                  style={{
                    height: 100,
                    filter: 'grayscale(100%)',
                    ':hover': {
                      filter: 'grayscale(0%)',
                    },
                  }}
                />
              );
            })}
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default About;
