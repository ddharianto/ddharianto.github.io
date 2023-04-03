import React from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tech_stack, about_me } from '../assets';

const About = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="main"
      id="about"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: mdDown ? 'center' : 'justify',
          pt: 5,
        }}
      >
        <Grid container spacing={2}>
          {mdDown && (
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
              {mdDown && (
                <Avatar
                  src={about_me.avatar}
                  sx={{
                    width: 200,
                    height: 200,
                    border: '10px solid white',
                    mx: 'auto',
                  }}
                />
              )}
            </Grid>
          )}
          <Grid item xs={12} md={7} lg={7}>
            <Typography
              variant={mdDown ? 'h2' : 'h4'}
              fontWeight={'bold'}
              color="white"
              mb={2}
            >
              Hello,
            </Typography>
            <Typography variant="h6" color="white">
              {about_me.desc}
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
                src={about_me.avatar}
                sx={{
                  width: 290,
                  height: 290,
                  border: '10px solid white',
                  mx: 'auto',
                }}
              />
            )}
          </Grid>
        </Grid>

        <Container
          id="tech_stack"
          component="div"
          className="logos"
          sx={{
            py: 20,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          <div className="logos-slide">
            {tech_stack.map((tech, index) => {
              return (
                <Box
                  id="img"
                  key={index}
                  component="img"
                  alt={tech.name}
                  src={tech.icon}
                  sx={{
                    height: 100,
                    color: tech.name === 'Visual Studio' && '#0078d7',
                    filter: !mdDown && 'grayscale(100%)',
                    '&:hover': {
                      filter: 'none',
                    },
                  }}
                />
              );
            })}
          </div>
          <div className="logos-slide">
            {tech_stack.map((tech, index) => {
              return (
                <Box
                  id="img"
                  key={index}
                  component="img"
                  alt={tech.name}
                  src={tech.icon}
                  sx={{
                    height: 100,
                    color: tech.name === 'Visual Studio' && '#0078d7',
                    filter: !mdDown && 'grayscale(100%)',
                    '&:hover': {
                      filter: 'none',
                    },
                  }}
                />
              );
            })}
          </div>
        </Container>
      </Container>
    </Box>
  );
};

export default About;
