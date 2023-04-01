import React, { useState } from 'react';
import {
  Box,
  Stack,
  IconButton,
  SvgIcon,
  Link,
  Container,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';

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
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.down('md'));
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (el) => {
    setAnchorEl(null);
  };

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
            <Link href="#" underline="none">
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
            {lgUp ? (
              <>
                <IconButton onClick={handleClick}>
                  <SvgIcon fontSize="large" sx={{ color: 'white' }}>
                    <MenuIcon />
                  </SvgIcon>
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuList
                    disablePadding
                    dense
                    sx={{
                      px: '8px',
                      py: 0,
                      '& > *': {
                        borderRadius: 1,
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link href="#about" underline="none" color="inherit">
                        About{' '}
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="#projects" underline="none" color="inherit">
                        Projects
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="#contacts" underline="none" color="inherit">
                        Contacts
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href="#" underline="none" color="inherit">
                        Download CV
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
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
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
