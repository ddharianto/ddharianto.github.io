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
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

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

const Navbar = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#150B6B',
        position: 'sticky',
        width: '100%',
        top: 0,
        transition: '0.32s ease-in-out',
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: 70,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Link href="/" underline="none">
              <Typography
                color={'white'}
                variant={'h5'}
                sx={{ fontWeight: 'bold' }}
              >
                {'@//${ddharianto}'}
              </Typography>
            </Link>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={5}>
            <CustomTooltip title="About Me">
              <Link href="#about" underline="none">
                <Typography
                  color={'white'}
                  variant={'h6'}
                  sx={{ fontWeight: 'bold' }}
                >
                  {'about.'}
                </Typography>
              </Link>
            </CustomTooltip>
            <CustomTooltip title="My Projects">
              <Link href="#projects" underline="none">
                <Typography
                  color={'white'}
                  variant={'h6'}
                  sx={{ fontWeight: 'bold' }}
                >
                  {'projects.'}
                </Typography>
              </Link>
            </CustomTooltip>
            <CustomTooltip title="Contact Me">
              <Link href="#contacts" underline="none">
                <Typography
                  color={'white'}
                  variant={'h6'}
                  sx={{ fontWeight: 'bold' }}
                >
                  {'contacts.'}
                </Typography>
              </Link>
            </CustomTooltip>
            <CustomTooltip title="Download CV">
              <Link href="#" underline="none">
                <Typography
                  color={'white'}
                  variant={'h6'}
                  sx={{ fontWeight: 'bold' }}
                >
                  {'download.'}
                </Typography>
              </Link>
            </CustomTooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
