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
          pt: 5,
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
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {projects.map((project, index) => {
              return (
                <Grid item key={index} xs={12} md={4} lg={4}>
                  <Card sx={{ maxWidth: 345, position: 'relative' }}>
                    <CardMedia
                      component="img"
                      alt={project.name}
                      image={project.image}
                      sx={{
                        height: 200,
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
                          sx={{ color: '#826C00' }}
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
                    <CardContent>
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
                                variant="outlined"
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
          <Grid item sx={{ mt: 10 }}>
            <Button
              size="small"
              href={'https://github.com/ddharianto?tab=repositories'}
              target="_blank"
              rel="noopener"
              endIcon={<ArrowForwardIcon />}
              sx={{ color: '#fff', textTransform: 'initial' }}
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
