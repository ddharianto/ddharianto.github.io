import React from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  Avatar,
  Link,
  Stack,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { contacts } from '../assets';

const Contacts = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="main"
      id="contacts"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: mdDown ? 'left' : 'justify',
          pt: mdDown ? 10 : 15,
        }}
      >
        <Typography
          variant={mdDown ? 'h2' : 'h4'}
          fontWeight={'bold'}
          color="white"
          mb={2}
        >
          Contacts,
        </Typography>
        <Grid
          container
          spacing={4}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ mt: 5 }}
        >
          {contacts.map((contact, index) => {
            return (
              <Grid item key={index}>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                >
                  <Avatar
                    src={contact.avatar}
                    sx={{
                      width: 50,
                      height: 50,
                    }}
                  />
                  <Link
                    href={contact.src}
                    underline="none"
                    variant="h5"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'white' }}
                  >
                    {contact.label}
                  </Link>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;
