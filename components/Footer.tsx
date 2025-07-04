import { Box, Container, Grid, Typography, Link } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box component="footer" py={8} bgcolor="background.default">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Fair<span style={{ color: '#1779ba' }}>form</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Instant, audit-ready compliance policy packs tailored to Australian small businesses.
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Company
            </Typography>
            <Link href="#" variant="body2" color="text.secondary" display="block" mb={1}>
              About Us
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block" mb={1}>
              Careers
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Contact
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Resources
            </Typography>
            <Link href="#" variant="body2" color="text.secondary" display="block" mb={1}>
              Blog
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block" mb={1}>
              Compliance Guides
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              Industry Updates
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Legal
            </Typography>
            <Link href="#" variant="body2" color="text.secondary" display="block" mb={1}>
              Terms of Service
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block" mb={1}>
              Privacy Policy
            </Link>
            <Link href="#" variant="body2" color="text.secondary" display="block">
              GDPR
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