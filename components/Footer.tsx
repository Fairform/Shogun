import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box component="footer" py={8} bgcolor="background.default">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Fair<span style={{ color: '#1779ba' }}>form</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Instant, audit-ready compliance policy packs tailored to Australian small businesses.
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
              Company
            </Typography>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block" mb={1}>
                About Us
              </MuiLink>
            </Link>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block" mb={1}>
                Careers
              </MuiLink>
            </Link>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block">
                Contact
              </MuiLink>
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
              Resources
            </Typography>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block" mb={1}>
                Blog
              </MuiLink>
            </Link>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block" mb={1}>
                Compliance Guides
              </MuiLink>
            </Link>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block">
                Industry Updates
              </MuiLink>
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
              Legal
            </Typography>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block" mb={1}>
                Terms of Service
              </MuiLink>
            </Link>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block" mb={1}>
                Privacy Policy
              </MuiLink>
            </Link>
            <Link href="#" passHref>
              <MuiLink variant="body2" color="text.secondary" display="block">
                GDPR
              </MuiLink>
            </Link>
          </Grid>
        </Grid>
        
        <Box mt={6} pt={4} borderTop="1px solid" borderColor="divider">
          <Typography variant="body2" color="text.secondary" align="center">
            &copy; {currentYear} Fairform. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}