import { AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const navItems = [
  { name: 'Industries', href: '#industries' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'How It Works', href: '#how-it-works' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
      <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                <Button sx={{ mx: 1 }}>{item.name}</Button>
              </Link>
            ))}
            <Link href="/login" passHref>
              <Button sx={{ mx: 1 }}>Login</Button>
            </Link>
            <Link href="/generate" passHref>
              <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                Start
              </Button>
            </Link>
          </div>
        )}
      </Toolbar>
      
      {/* Mobile menu */}
      {mobileOpen && isMobile && (
        <div style={{ padding: '0 16px 16px' }}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <Button fullWidth sx={{ my: 0.5 }}>{item.name}</Button>
            </Link>
          ))}
          <Link href="/login" passHref>
            <Button fullWidth sx={{ my: 0.5 }}>Login</Button>
          </Link>
          <Link href="/generate" passHref>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
              Start Generating
            </Button>
          </Link>
        </div>
      )}
    </AppBar>
  );
}