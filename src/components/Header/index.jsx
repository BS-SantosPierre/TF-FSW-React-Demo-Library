import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            component={Link}
            to='/'
          >
            <HomeIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexGrow: 1, gap: '20px', justifyContent: 'end' }}>
            <Typography
              color='inherit'
              variant='h6'
              component={NavLink}
              style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined)}
              to='/about'
              sx={{ textDecoration: 'none' }}
            >
              About
            </Typography>
            <Typography
              color='inherit'
              variant='h6'
              component={Link}
              to='/contact'
              sx={{ textDecoration: 'none' }}
            >
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
    </header>
  );
};

export default Header;
