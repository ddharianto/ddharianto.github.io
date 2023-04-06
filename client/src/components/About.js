import React from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled, useTheme } from '@mui/material/styles';
import { tech_stack, about_me } from '../assets';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#004699',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#004699',
  },
}));

const About = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

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
            py: 10,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
          }}
        >
          <div className="logos-slide">
            {tech_stack.map((tech, index) => {
              return (
                <CustomTooltip
                  className="tooltip"
                  title={tech.name}
                  followCursor={true}
                  key={index}
                >
                  <Box
                    id="img"
                    component="img"
                    alt={tech.name}
                    src={tech.icon}
                    sx={{
                      height: 100,
                      color: tech.name === 'Visual Studio' && '#0078d7',
                      filter: !lgDown && 'grayscale(100%)',
                      '&:hover': {
                        filter: 'none',
                      },
                    }}
                  />
                </CustomTooltip>
              );
            })}
          </div>

          {/* duplicate logos-slide div for smooth animation*/}
          <div className="logos-slide">
            {tech_stack.map((tech, index) => {
              return (
                <CustomTooltip
                  key={index}
                  title={tech.name}
                  followCursor={true}
                >
                  <Box
                    id="img"
                    component="img"
                    alt={tech.name}
                    src={tech.icon}
                    sx={{
                      height: 100,
                      color: tech.name === 'Visual Studio' && '#0078d7',
                      filter: !lgDown && 'grayscale(100%)',
                      '&:hover': {
                        filter: 'none',
                      },
                    }}
                  />
                </CustomTooltip>
              );
            })}
          </div>
        </Container>
      </Container>
    </Box>
  );
};

export default About;
