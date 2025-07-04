import { AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'Industries', href: '#industries' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'How It Works', href: '#how-it-works' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={0}
      sx={{ 
        backgroundColor: 'background.default',
        py: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        px: 2,
      }}>
        <Link href="/" passHref>
          <Button
            sx={{ 
              fontSize: '1.5rem', 
              fontWeight: 700,
              color: 'primary.main',
              '&:hover': { backgroundColor: 'transparent' }
            }}
          >
            Fair<span style={{ color: theme.palette.secondary.main }}>form</span>
          </Button>
        </Link>

        {isMobile ? (
          <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <div>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <Button sx={{ mx: 1, fontWeight: 500 }}>{item.name}</Button>
              </Link>
            ))}
            <Link href="/login" passHref>
              <Button sx={{ mx: 1, fontWeight: 500 }}>Login</Button>
            </Link>
            <Link href="/generate" passHref>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ ml: 2, fontWeight: 600 }}
              >
                Start
              </Button>
            </Link>
          </div>
        )}
      </Toolbar>
      
      {mobileOpen && isMobile && (
        <Box sx={{ 
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <Button 
                fullWidth 
                sx={{ my: 0.5, justifyContent: 'flex-start' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <Link href="/login" passHref>
            <Button 
              fullWidth 
              sx={{ my: 0.5, justifyContent: 'flex-start' }}
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Button>
          </Link>
          <Link href="/generate" passHref>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ mt: 1 }}
              onClick={() => setMobileOpen(false)}
            >
              Start Generating
            </Button>
          </Link>
        </Box>
      )}
    </AppBar>
  );
}