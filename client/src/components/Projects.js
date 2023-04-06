import React from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  useMediaQuery,
  Card,
  CardActions,
  CardContent,
  Chip,
  CardMedia,
  Stack,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projects } from '../assets';

const chips_color = [
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
];

const Projects = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="main"
      id="projects"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: mdDown ? 'center' : 'left',
          pt: mdDown ? 10 : 15,
        }}
      >
        <Typography
          variant={mdDown ? 'h2' : 'h4'}
          fontWeight={'bold'}
          color="white"
          mb={2}
        >
          Recent projects,
        </Typography>

        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            spacing={2}
          >
            {projects.map((project, index) => {
              return (
                <Grid item key={index} xs={smDown ? 12 : 8} md={6} lg={4}>
                  <Card
                    sx={{
                      maxWidth: mdDown ? 500 : 350,
                      minHeight: 400,
                      position: 'relative',
                      backgroundColor: '#b39ddb',
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={project.name}
                      image={project.image}
                      sx={{
                        height: mdDown ? 350 : 200,
                      }}
                    />
                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent={'center'}
                    >
                      {project.demo !== '' ? (
                        <Button
                          href={project.demo}
                          target="_blank"
                          rel="noopener"
                          size="small"
                          startIcon={<VisibilityIcon />}
                          sx={{ color: '#00316B' }}
                        >
                          Demo
                        </Button>
                      ) : (
                        ''
                      )}
                      <Button
                        size="small"
                        href={project.src}
                        target="_blank"
                        rel="noopener"
                        startIcon={<GitHubIcon />}
                        sx={{ color: '#820075' }}
                      >
                        source code
                      </Button>
                    </Stack>
                    <CardContent sx={{ minHeight: 160 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid
                        container
                        item
                        wrap="wrap"
                        justifyContent={'center'}
                        spacing={1}
                        mb={1}
                      >
                        {project.tags.map((tag, index) => {
                          return (
                            <Grid item key={index}>
                              <Chip
                                label={tag}
                                color={chips_color[index]}
                                variant="filled"
                              />
                            </Grid>
                          );
                        })}
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Grid item sx={{ mt: 2 }}>
            <Button
              size="large"
              href={'https://github.com/ddharianto?tab=repositories'}
              target="_blank"
              rel="noopener"
              endIcon={<ArrowForwardIcon />}
              sx={{ color: '#fff', textTransform: 'initial', fontSize: 17 }}
            >
              See all projects on GitHub repository
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
